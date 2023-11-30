var express = require('express');

var userController = require('../src/controllers/usercontroller');

const router = express.Router();
router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);


module.exports = router;