<h1  align="center">Mayan Social - A Social Media Site</h1><hr><br />

<h1 align="center">🌐 MERN Stack</h1>
<p align="center">MongoDB, Expressjs, React, Nodejs</p>

<p align="center">
   <a href="https://travis-ci.com/amazingandyyy/mern">
      <img src="https://travis-ci.com/amazingandyyy/mern.svg?branch=master" />
   </a>
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/mern">
      <img src="https://circleci.com/gh/amazingandyyy/mern.svg?style=svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.<hr><br />



 <h1>Description</h1><br />
    MAYAN SOCIAL is an attempt to to help people to connect with others online through this site. It is a web based application where people can browse inspiring people, friends and celebrities worldwide. You can also like, share and comment on other people posts and you can also share your interesting experiences with others.<hr><br />

 
 <h1>User Stories</h1><br />
 <ul>
   <li>As a user, I should be able to Signup using my google SSO.</li>
   <li>As a user, I should be able to SignUp by my email.</li>
   <li>As a user, I should be able to SignInusing my registered email account.</li>
   <li>As a user, I want the application UI to be responsive.</li>
   <li>As a user, I want to see only card-view for suggestions and then I can see details if i click view-more.</li>
   <li>As a user, I want to add my experince of the tour of certain place and later I can choose to remove it as well.</li>
   <li>As a user, I want to add my experince of the tour of certain place and later I can choose to edit it as well.</li>
   <li>As a user, I should only be able to edit or delete my post from the account it got posted.</li>
   <li>As a user, I should be able to add picture and description about the place I visited.</li>
   <li>As a user, I should be able to share, like and comments on post and interact with other users.</li>
   <li>As a user, I should be able to view posts via tags.</li>
   <li>As a user, I should be able to see the posts i made in the dashboard.</li>
   <li>As a tourist, I want to read recommendations and reviews about a city posted by other travelers or local people so that I can arrange my tour.</li>
   <li>As a tourist, I want to share my reviews after visiting the city so that others can learn from my experience.</li>
   <li>As a local person, I want to recommend travelers interesting sightseeing places to travelers so that they can get informed and make better decisions.</li>
  </ul> 
<hr><br />


# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^16.2.0 | express: ^4.14.0
react-redux: ^4.0.0 | jwt-simple: ^0.5.1
react-router-dom: ^4.2.2 | mongoose: ^4.7.4
redux: ^3.7.2 | google signin api
redux-thunk: ^2.1.0 | node js: ^16.0.0
material design bootstrap |
disqus api |
<hr><br />

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Node](https://nodejs.org/en/download/) ^16.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

Notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## clone or download
```terminal
$ git clone https://github.com/neu-mis-info6150-spring-2022/final-project-bestapp.git
```

## web app usage(PORT: 3000)
```terminal
$ cd web app   // go to client folder
$ npm i @reduxjs/toolkit react-router-dom mdb-react-ui-kit moment react-file-base64 react-google-login react-redux react-toastify @material-ui/core material-ui-chip-input axios prop-types --legacy-peer-deps  // npm install required packages
$ npm run start // run it locally
```
## Server usage(PORT: 5000)
```terminal
$ cd server   // go to server folder
$ npm install
$ npm i bcryptjs cors express jsonwebtoken mongoose morgan nodemon
$ npm run dev // run it locally
```

<hr><br />


