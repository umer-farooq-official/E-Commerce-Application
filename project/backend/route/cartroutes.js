const express = require('express');
const cartController = require('../src/controllers/cartcontroller');
const router = express.Router();

router.route('/cart/create').post(cartController.createCartControllerFn);
router.route('/cart/:userId').get(cartController.getCartControllerFn);
router.route('/cart/:userId').put(cartController.updateCartControllerFn);
router.route('/cart/:userId').delete(cartController.deleteCartControllerFn);
router.route('/items').get(cartController.getAllItemsControllerFn);
module.exports = router;

