# icl-test

create oauth app https://console.cloud.google.com/apis/dashboard
create Oauth client with allowed https://localhost:8001 host and download json with creds
set google api tokens in /server.env and set id on loginService (need to pass throo ENV)
set .env database path to mongoDB

in ./server folder:
```
yarn
yarn genkeys
yarn dev
```

in ./client folder:
```
yarn
yarn dev
```
