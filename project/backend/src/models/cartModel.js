var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    product_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required:true        
    },
    productname: {
        type: String,
        required: true,
      },
    productprice: {
      type: Number,
      required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
    
    
  });
  


const cart = mongoose.model('cart', cartSchema);
module.exports = cart;
