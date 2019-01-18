/***************************************************************************************************
 ******************************************* dependencies ******************************************
 **************************************************************************************************/
const express = require('express');

const server = express();

/***************************************************************************************************
 ******************************************** middleware *******************************************
 **************************************************************************************************/
const configureMiddleware = require('../middleware/middleware.js');
configureMiddleware(server);

/***************************************************************************************************
 ********************************************** routes *********************************************
 **************************************************************************************************/
server.get('/', (req, res) => {
  res.send(`Main Server Running...`);
});

const dishRouter = require('./routes/dishRouter.js');
const recipesRouter = require('./routes/recipesRouter.js');

server.use('/api/dishes', dishRouter);
server.use('/api/recipes', recipesRouter);

/***************************************************************************************************
 ********************************************* export(s) *******************************************
 **************************************************************************************************/
module.exports = server;