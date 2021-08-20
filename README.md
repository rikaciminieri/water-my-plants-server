# water-my-plants-server
ENDPOINTS: 
[BASE URL:] https://plant-water-api.herokuapp.com/     *(runs fine locally but on heroku theres errors, maybe cause i used my fork to host and test deployment)*

[LOGIN existing user] https://plant-water-api.herokuapp.com/api/auth/login


[REGISTER new user] https://plant-water-api.herokuapp.com/api/auth/register


[GETS ALL PLANTS:]  https://plant-water-api.herokuapp.com/api/plants


[GETS SPECIFIC PLANTS BY ID] https://plant-water-api.herokuapp.com/api/plants/:id


[POST new plant] https://plant-water-api.herokuapp.com/api/plants/:id


[PUT change plant] https://plant-water-api.herokuapp.com/api/plants/:id


[DELETE plant] https://plant-water-api.herokuapp.com/api/plants/:id

FILE EXPLANATIONS:

the api folder (specifically the plant ) contains all the endpoints and middleware/database functions as well as the main server.js page,

in the api folder, the auth folder holds the endpoints for login and registration as well as the middleware and JWT distribution

the config folder contains the secret for the JWT

the data folder contains all the base data for the database, the schema for the database can be found in the migrations folder and the seeded data (default values) for the database can be found in the seeds folder

index.js holds the local port for the server to run on, knexfile.js is config file for a dependency thats works with SQLite3 that allows SQL queries in JS to communicate with databases
knex is used in the migrations and seeds folders/files

watermyplants.db3 is the database file


[*syntax for the API should be the same as whats on the client side of things*]

user signup/login syntax

{  username: 'DrStrange',
    password:'d0ntTxTand_drive',
    phoneNumber:'7774441113',
},


plant syntax
{   species:'',
nickname:'',
h2oFrequency:'',
origins:''
},


/*REMEMBER FOR LATER*\
*heroku logs arent much help in finding the error (error H10) and (failed at start scripts)*
    PACKAGE.JSON REPOSITORY URL (REVERT BACK TO Rika's REPOSITORY INSTEAD OF MY FORK IF THAT DOESNT FIX ERRORS)
    IF ERRORS PERSIST, UPDATE ALL DEPENDENCIES MANUALLY, IF THAT DOESNT WORK MOVE CLIENT AND SERVER REPOSITORIES TO GITHUB ORGANIZTAION.
    CLIENT SIDE CAN USE DUMMY API IF ALL ELSE FAILS
