---
title: 'Deploying Full Stack apps'
slug: "deploying-full-stack-apps"
description: ''
planted: '2022-02-27'
author: 'Jesus Guerrero'
tags: ['development']
language: 'English'
status: seedling
layout: '../../../layouts/Seed.astro'
---

In today's development world is easier than ever to deploy your proyects online with minimal configuration, with frontend and JAM or node powered apps there are a lot of good options: Vercel, Netlify, Gihub Pages, Gitlab Pages but for modern php/laravel powered apps there's no too many. out of [Heroku]() I dont find a good one with modern characteristics as we have in frontend.

#### The needs
I am talking about a production ready app so what are our checklist

- Separated `landing page` from the app. we dont want app errors affecting our marketing / guides pages neither slowing them down and want to implement SEO that probably our app itself doesnt need, because the routes are guarded.
- The `Main app` with Laravel/Jetstream and all resources we need for it (Database, cron tabs, redis )
- A `Database Manager` to quick review the database if we are far for our computer and we need to manage the data online
- Ownership, we dont need to pay extra money just to have a basic functionality we would like (now everyting is a plugin, DB, Crons, etc... bro, I can install it)
- For a massive app with > 100 paying customers maybe is a good options to migrate to something like   [the laravel services]() but for now maybe we just need to deploy and get some users and see how it goes with lees spent as posible.

#### The solution

Well the solution require some steps that are not so straight forward as I would like but It get the shit done

- Cloud provider: Digital Ocean
- Apps: Docker, Docker Compose
- Tools: [ssl-companion](jrcs/letsencrypt-nginx-proxy-companion), jwilder/nginx-proxy


#### steps
- start a doplet with Digital Ocean (you have to give access to your ssh key when creating)
- set up your domains in DO, i got the `neatlancer.com`(landing)  and  `loger.neatlancer.com`(Application) as it is in my docker configuration
- install docker, docker compose and node.js 
- install `insane/remotr` in your laravel project and set the `REMOTR_SERVER_IP` and `REMOTR_REPO_NAME` in your `.env` doc
- run your `docker compose up` command on the server via ssh  and that's it

Maybe there's a shorter way to doit but not at USD 5.00 / Month without the cold starts

Anyways I am still testing out to see how it goes.