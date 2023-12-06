const express = require('express');
const contactController = require('../src/controllers/contactcontroller');
const router = express.Router();

router.route('/contact/create').post(contactController.createContactControllerFn);
router.route('/contacts').get(contactController.getAllContactsControllerFn);

module.exports = router;
