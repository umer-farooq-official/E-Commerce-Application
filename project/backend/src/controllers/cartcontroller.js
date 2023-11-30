const cartmodels = require('../models/cartModel');
var addtoCartFn = async (req, res) => {
    try {
        new cartmodels({
            product_id: req.body.product_id,
            productprice: req.body.productprice,
            quantity: req.body.quantity,
            userId: req.userId,
            

        })




    }
    catch (error) {
        console.log(error);
    }


}

module.exports = {addtoCartFn };