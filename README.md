#Isomorphic Boilerplate

[![Build Status](https://travis-ci.org/ali322/isomorphic-boilerplate.svg)](https://travis-ci.org/ali322/isomorphic-boilerplate)
[![Dependency Status](https://gemnasium.com/ali322/isomorphic-boilerplate.svg)](https://gemnasium.com/ali322/isomorphic-boilerplate)
[![Code Climate](https://codeclimate.com/github/ali322/isomorphic-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/ali322/isomorphic-boilerplate)

isomorphic webapp boilerplate [中文文档](./README_zh.md)

Quick start
===
- run`npm install`
- run`npm run develop-webpack` to inject necessary files to the template file
- run`npm run develop` to get develop server start

Deploy to production environment
===
- run`npm install --production`
- run`npm install pm2 -g`(more instructions in [pm2 documention](https://github.com/Unitech/PM2))
- run`pm2 start app.js --name <Project Name>` to deploy

Directory structure
===

```sh
__test__/
    |-- client/ #client unit tests
    |-- server/ #server unit tests
client/
    |-- asset/      #images,fonts and so on
    |-- bundle/
        |-- common/ #public css and js
        |-- component/ #component's css
        |-- error/  #error page's entry js and css
        |-- index/  #index page's entry js and css
        |-- .../    #more your own page's entry js and css,like index page
    |-- vendor/     #third party libraries
server/
    |-- controller/ #express routes directory
    |-- lib/        #server libraries,util and helper modules inside
    |-- router.js   #server router,all the routes is defined here
    |-- bootstrap.js #initialize application,load middlewares and setup
shared/
    |-- common/     #common web components,etc:error
    |-- lib/        #shared libraries(client and server)
    |-- component/  #common component,etc alert,selected
    |-- chunk/
        |-- common/     #component in common use
        |-- index/      #index page's web components
        |-- .../        #more your own page's web components,like index page
task/
    |-- config/
        |-- module.json #define page's path and module config
        |-- vendor.json #define third party libraries
    |-- environment.js  #define module's env variables
    |-- hmr-server.js       #webpack dev server entry file
    |-- webpack-inject.js #inject compiled js and css into templates
    |-- webpack.develop.js #compile modules and vendors for develop
    |-- webpack.production.js #compile modules and vendors for production
    |-- webpack.hot-update.js #compile modules and vendors for develop in HMR
view/
    |-- layout.html #global layout template
    |-- index.html  #index page's template
    |-- *.html      #more your own page's template
app.js      #web application enrty file
gulpfile.js #task entry file
```


