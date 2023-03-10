# WeLoveMovies -  Thinkful Captstone

Built using Express, Knex, and PostgreSQL

## To run the server

1. Fork/Clone this repository
2. `cd` into the project directory
3. Run `npm install` to install project dependencies
4. Run `npm run start:dev` tp start server in development mode
5. OR run `npm start`

## Objectives
This project is designed to test your ability to build complex servers and access data through a database. To succeed, demonstrate the following tasks:

* Install and use common middleware packages
* Receive requests through routes
* Run tests from the command line
* Access relevant information through route and query parameters
* Create an error handler for the case where a route doesn't exist
* Build an API following RESTful design principles
* Create and customize a knexfile.js file
* Create a connection to your database with Knex
* Write database queries to complete CRUD routes in an Express server
* Return joined and nested data with Knex
* Write database migrations using Knex's migration tool
* Deploy your backend server to a cloud service

## General Tasks
Also will need to make sure the following tasks are complete

* Your app.js file and server.js file are correctly configured, with your app.js file exporting the application created from Express.
* You use the cors package so that requests from the frontend can correctly reach the backend.
* If a request is made to a route that doesn't exist, the server returns a 404 error.
* If a request is made to a route that exists but the HTTP method is wrong, the server returns a 405 error.
* All of your routes respond with the appropriate status code and use a data key in the response.