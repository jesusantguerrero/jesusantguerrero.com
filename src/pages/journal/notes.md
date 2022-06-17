### Location Cors

```
 location / {
 28         if ($request_method = OPTIONS ) {
 29             add_header Access-Control-Allow-Origin  "*";
 30             add_header Access-Control-Allow-Methods "POST, GET, PUT, UPDATE, DELETE, OPTIONS";
 31             add_header Access-Control-Allow-Headers "Authorization, Content-Type, Access-Control-Allow-Headers, Cache-Control, X-Requested-Wit
    h, Token";
 32             add_header Access-Control-Allow-Credentials  "true";
 33             add_header Content-Length 0;
 34             add_header Content-Type text/plain;
 35             return 200;
 36         }
 37         try_files $uri $uri/ /index.php?_url=$uri&$args;
 38
 39         if ($request_uri ~ "/images/.+") {
 40              rewrite ^/images/(.+) https://cdn.naruho.do/images/$1 redirect;
 41         }
 42     }
```