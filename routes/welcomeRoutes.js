/**
 * DOCU: Loads the Express Module in order for us
 * to use the Router Function.
 */

const express = require("express");

/**
 * DOCU: Using Express Module rename Router function
 * to Router.
 */

const welcomeRoutes = express.Router();

/**
 * DOCU: Imports Controller Module
 * NOTE: Controller Exports Ready Made Object
 * No need to create new object.
 */

const welcomeController = require("../controllers/welcomeController");

/**
 * DOCU: Using the Object from module controller
 * Routes the User from specific request.
 */

welcomeRoutes.get("/", welcomeController.index);

/**
 * DOCU: Export Router Module to App.js
 */

module.exports = welcomeRoutes; 
