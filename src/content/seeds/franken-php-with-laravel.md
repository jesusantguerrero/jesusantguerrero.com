---
title: 'FrankenPHP with Laravel'
description: ''
planted: '2024-03-21'
author: 'Jesus Guerrero'
tags: ['development', 'web', 'laravel', 'PHP']
language: 'English'
status: evergreen
---

When it comes to building a production ready application in the fastest, more maintainable and playful way Laravel is one of the best frameworks in the market with queues, db integrations, Mail integrations, first class test battery, a great ecosystem, and a nice integrations with modern frontend options are some of the strongest weapons that laravel put at your service to the war of building web apps.

Deployments and realtime support for laravel projects of low cost though is something that still had room for improvements and that's why today We'll explore an tool that covers both aspects. I am talking about FrankenPHP.

#### What is FrankenPHP

FrankenPHP is a modern application server for PHP. powered by caddy web server it offers a replacement for Nginx, auto certifications for your sites, real time capabilities and more.

We can use docker to build a production ready configuration and deploy in a Digital Ocean's Doplet for example

#### Prepare a project for Docker compose with FrankenPHP

First we're going to create a docker file for our project

```
FROM dunglas/frankenphp

ARG user
ARG uid
ARG TZ

ENV user $user
ENV uid $uid
ENV TZ $TZ
ENV SERVER_NAME $serverName

ENV DEBIAN_FRONTEND noninteractive

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

RUN apt-get update \
    && mkdir -p /etc/apt/keyrings \
    && apt-get install -y gnupg gosu curl zip unzip git supervisor libcap2-bin libpng-dev dnsutils librsvg2-bin fswatch \
    && apt-get update

RUN install-php-extensions gd imagick \
       curl \
       imap pdo_mysql mbstring \
       xml zip bcmath soap \
       intl readline \
       ldap \
       msgpack igbinary redis \
       memcached pcov xdebug \
    && curl -sLS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer \
    && apt-get update

```
We'll customize the caddy config file like the following:

```
{
	frankenphp
	order mercure after encode
	order php_server before file_server
	{$GLOBAL_OPTIONS}
}

# The domain name of your server
{$SERVER_NAME:localhost} {
	# Set the webroot to the public/ dir
	root * public/
	# Enable compression (optional)
	encode zstd gzip
	# Execute PHP files in the current directory and serve assets
	php_server {
		# Required for the public/storage/ dir
		resolve_root_symlink
	}

    mercure {
		# Transport to use (default to Bolt)
		transport_url {$MERCURE_TRANSPORT_URL:bolt://mercure.db}
		# Publisher JWT key
		publisher_jwt {env.MERCURE_PUBLISHER_JWT_KEY}
		# Subscriber JWT key
		subscriber_jwt {env.MERCURE_SUBSCRIBER_JWT_KEY}
		# Permissive configuration for the development environment
		cors_origins *
		publish_origins *
		demo
		anonymous
		subscriptions
		# Extra directives
		{$MERCURE_EXTRA_DIRECTIVES}
	}

	{$CADDY_SERVER_EXTRA_DIRECTIVES}
}

```

and our compose like this

```
version: "3.7"
services:
    web:
        build:
            args:
                uid: 1000
                TZ: America\New_York
                serverName: localhost
            context: ./docker-compose
            dockerfile: Dockerfile
        image: franken/app
        extra_hosts:
            - 'host.docker.internal:host-gateway'
        ports:
            - "80:80" # HTTP
            - "443:443" # HTTPS
            - "443:443/udp" # HTTP/3
        env_file:
        - .env.docker
        environment:
            DEBUG: "debug"
            # Change the following value if you know how it works.
            # MERCURE_TRANSPORT_URL: "bolt://mercure.db"
            MERCURE_PUBLISHER_JWT_KEY: "${MERCURE_PUBLISHER_JWT_KEY}"
            MERCURE_SUBSCRIBER_JWT_KEY: "${MERCURE_SUBSCRIBER_JWT_KEY}"
            # In the cors_origin, add your domain(s). Or just use *
            MERCURE_EXTRA_DIRECTIVES: |-
                cors_origins "*"
                anonymous
        volumes:
            - '.:/app'
            - ./Caddyfile:/etc/caddy/Caddyfile
            - ./docker-compose/supervisord.conf:/etc/supervisor/conf.d/supervisord.conf
            - ./docker-compose/php.inis:/etc/php/8.3/cli/conf.d/php.ini
            - caddy_data:/data
            - caddy_config:/config
        networks:
            - atmosphere
        depends_on:
            - mariadb
            - redis
    mariadb:
        image: 'mariadb:10'
        restart: always
        ports:
            - "3308:3306"
        env_file:
            - .env.docker
        environment:
            MYSQL_ROOT_PASSWORD: ${DB_PASSWORD}
            MYSQL_DATABASE: ${DB_DATABASE}
            MYSQL_PASSWORD: ${DB_PASSWORD}
            MYSQL_USER: ${DB_USERNAME}
            MYSQL_ALLOW_EMPTY_PASSWORD: 1
            SERVICE_TAGS: dev
            SERVICE_NAME: mariadb
        volumes:
            - 'atmosphere_db:/var/lib/mysql'
            - ./docker-compose/mysql:/docker-entrypoint-initdb.d
            - ./docker-compose/mysql:/home/root/cache/
        networks:
            - atmosphere
        healthcheck:
            test:
                - CMD
                - mysqladmin
                - ping
                - '-p${DB_PASSWORD}'
            retries: 3
            timeout: 5s
    redis:
        image: 'redis:alpine'
        ports:
            - '${FORWARD_REDIS_PORT:-6379}:6379'
        volumes:
            - 'atmosphere_redis:/data'
        networks:
            - atmosphere
        healthcheck:
            test:
                - CMD
                - redis-cli
                - ping
            retries: 3
            timeout: 5s
networks:
    atmosphere:
        driver: bridge
volumes:
    caddy_data:
    caddy_config:
    atmosphere_db:
        driver: local
    atmosphere_redis:
        driver: local

```