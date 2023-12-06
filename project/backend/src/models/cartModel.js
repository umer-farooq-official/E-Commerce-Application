const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    product_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    productname: {
        type: String,
        required: true,
    },
    productprice: {
        type: Number, // Change the type to Number
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
