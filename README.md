# backend
<p align="center">
 <img height="150px" src="https://user-images.githubusercontent.com/51263906/116891353-39ac0980-ac4c-11eb-9943-88aa7de3645a.png"/>
</p>

# setting up environment 
https://zarkom.net/blogs/windows-local-coding-environment-1204 \
https://zarkom.net/blogs/linux-ubuntu-local-coding-environment-1528 \
https://zarkom.net/blogs/mac-local-coding-environment-6283

# postman 
https://www.postman.com/

# npm package
https://www.npmjs.com/products/teams?utm_source=adwords&utm_medium=ppc&utm_campaign=npmTeams2019Q2&utm_content=site&gclid=Cj0KCQjwsYb0BRCOARIsAHbLPhFhE1pWRNssz2jqzbaz_1sM8p76GBcmqe7pVqGejLgLhKzrCTsPwggaAiqYEALw_wcB  \

<li>npm install package_name</li>
<li>require() //to add the pakage</li>
<li> node modules are the directory created when you install an npm package </li>

# Express 
https://expressjs.com/ \
https://expressjs.com/en/guide/routing.html  \
http://expressjs.com/en/5x/api.html#app.listen_path_callback

# npm-package.json
https://docs.npmjs.com/files/package.json.html

# Node.js: Difference between req.query[] and req.params
https://stackoverflow.com/questions/14417592/node-js-difference-between-req-query-and-req-params

# npm-init and package.json
npm init is used to create package.json and all ur packages and dependencies will be stored here \
name: package name \
version : version format(1.0.0) \
description : package description \
entry point :  // refers to where ur application starts \
author : author name \
license : use default license \  

# alternative for always starting ur node server 
https://www.youtube.com/watch?v=GvLvrlOqq9g&feature=youtu.be \
instead of always restarting ur server start ur app by using  (nodemon) and app the which u want to start should be mentioned in package.json \
by chance if u have cloned other work from git or etc use npm i -g nodemon where i stands for install and -g stands for global  \
wat this does is it will install all the packages from present in dependencies in package.json 


# ejs

checking ejs version npm -i s ejs \
for using body parser \



var bodyParser = require("body-parser"); \
app.use(bodyParser.urlencoded({ extended: true }));


# API
site for connecting api \
https://ifttt.com/  \
chrome extension for json viewer :- https://chrome.google.com/webstore/search/json%20viewer  \
http://jsonviewer.stack.hu/ \
curl is built in command line tool to make https request in terminal \
syntax :- curl url

### simplified http request client 
https://github.com/request/request \

installing npm package locus :$ npm i -D locus in windows if this debugging tool dosent work use npm i -D locus@2.0.0 \

movie database api which http://www.omdbapi.com/


# Node.js: Difference between req.query[] and req.params

https://stackoverflow.com/questions/14417592/node-js-difference-between-req-query-and-req-params

# mongodb
### installation
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ \
https://www.mongodb.com/download-center/community \
https://www.youtube.com/watch?v=FwMwO8pXfq0  \
https://docs.mongodb.com/manual/tutorial/getting-started/  \
https://code.visualstudio.com/docs/azure/mongodb
#### To connect a mongo.exe shell to the MongoDB instance, open another Command Interpreter with Administrative privileges and run:
"C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe" \


#

## mongodb commands link
https://docs.mongodb.com/manual/reference/method/db.dropDatabase/

mongod : to start mongodemon \
mongo :start database  \
use : to create or open existing database \
syntax use database name \
show db :to show list of databases \
show collections shows list of objects created inside the datbase \\
to drop database \
https://docs.mongodb.com/manual/reference/method/db.dropDatabase/


# Deprecation Warnings
https://mongoosejs.com/docs/deprecations.html \
https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated/57899638#57899638


# semantic ui
https://semantic-ui.com/introduction/getting-started.html

# restful routing 
https://medium.com/@shubhangirajagrawal/the-7-restful-routes-a8e84201f206

# glup.js for installing semantic-ui
https://gulpjs.com/docs/en/getting-started/quick-start
# problem with glup installation 
https://medium.com/gulpjs/gulp-util-ca3b1f9f9ac5


#### using Semantic UI as a dependency and just want to use our default theme, use our lighter semantic-ui-css or semantic-ui-less repo. If you just need the files you can download them as a zip from GitHub.

git clone this repo and add it ur project repo   \
https://github.com/Semantic-Org/Semantic-UI-CSS\    \
and connect it ot semantic.min.css file in partials/header.ejs file 


## best way to install semantic-ui rather than using npm 
npm install -g bower --save //installing bower components \

bower install semantic-ui

## Fomantic-UI an alternate for semantic-ui
https://fomantic-ui.com/  \

# Materialize
https://materializecss.com/getting-started.html  

# module.exports 

https://stackify.com/node-js-module-exports/



# seeding the datatbase means
<p>
Database seeding is the initial seeding of a database with data. Seeding a database is a process in which an initial set of data is   provided to a database when it is being installed. ... The data can be dummy data or necessary data such as an initial administrator account.
  
</p>


https://stackoverflow.com/questions/13546519/what-does-the-terminology-database-seeding-mean


# Error Driven Development 

<p>
  Error Driven Development is a pun on Test Driven Development. So besides writing tests, you should more importantly, write errors! And by errors I mean that the program should "throw" an error when something is wrong. ... To make a bug free program, it should crash at any opportunity, on all kind of errors 
 </p>
 
 
 # Authentication (!important) 
 refer this video for complete understanding of nodejs authentication https://www.youtube.com/watch?v=i7of02icPyQ&feature=youtu.be&t=35 \
 
 ### passport.js
 http://www.passportjs.org/
 
 # best place to learn mongodb
 https://university.mongodb.com/


