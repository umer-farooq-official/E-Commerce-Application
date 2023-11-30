const express = require('express');
const bodyParser = require('body-parser');
const cart_route = express();
var cartController = require('../src/controllers/cartcontroller');

// Middleware to parse JSON bodies
cart_route.use(bodyParser.json());

// Middleware to parse form data
cart_route.use(bodyParser.urlencoded({ extended: true }));

const auth = require("../middleware/auth");

cart_route.post('/api/add-to-cart',cartController.addtoCartFn);

module.exports = cart_route;


