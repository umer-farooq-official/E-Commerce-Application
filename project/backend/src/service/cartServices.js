const Cart = require('../models/cartModel');
const encryptor = require('simple-encryptor')('123456789trytryrtyr');

module.exports.createCartDBService = async (cartDetails) => {
    try {
        console.log("Received cart details in createCartDBService:", cartDetails);

       
        if (!cartDetails.product_id || !cartDetails.user_id || !cartDetails.productname || !cartDetails.productprice || !cartDetails.quantity) {
            throw new Error("Missing required fields in the request");
        }

        const cartModelData = new Cart({
            product_id: cartDetails.product_id,
            user_id: cartDetails.user_id,
            productname: cartDetails.productname,
            productprice: cartDetails.productprice,
            quantity: cartDetails.quantity,
        });

        await cartModelData.save();
        return { status: true, message: "Cart created successfully" };
    } catch (error) {
        console.error(error);
        throw new Error("Error in creating cart: " + error.message);
    }
};


module.exports.getCartDBService = async (userId) => {
    try {
        console.log("Received userId in getCartDBService:", userId);

        const cart = await Cart.findOne({ user_id: userId }).exec();

        if (!cart) {
            console.log("Cart not found for userId:", userId);
            throw new Error("Cart not found");
        }


        return { status: true, cart };
    } catch (error) {
        console.error("Error in getCartDBService:", error.message);
        throw new Error("Error in retrieving cart: " + error.message);
    }
};


module.exports.updateCartDBService = async (userId, updatedCartDetails) => {
    try {
        console.log("Received userId in updateCartDBService:", userId);

        const cart = await Cart.findOne({ user_id: userId }).exec();

        if (!cart) {
            throw new Error("Cart not found");
        }

        cart.productname = updatedCartDetails.productname;
        cart.productprice = updatedCartDetails.productprice;
        cart.quantity = updatedCartDetails.quantity;

        await cart.save();

        console.log("Current Cart State:", cart);
        console.log("Updated Cart State:", updatedCartDetails);

        return { status: true, message: "Cart updated successfully" };
    } catch (error) {
        throw new Error("Error in updating cart: " + error.message);
    }
};




module.exports.deleteCartDBService = async (userId) => {
    try {
        console.log("Received userId in deleteCartDBService:", userId);

        const cart = await Cart.findOneAndDelete({ user_id: userId }).exec();

        if (!cart) {
            throw new Error("Cart not found");
        }

        console.log("Deleted Cart State:", cart);

        return { status: true, message: "Cart deleted successfully" };
    } catch (error) {
        throw new Error("Error in deleting cart: " + error.message);
    }
};



module.exports.getAllItemsDBService = async () => {
    try {
        const items = await Cart.find().exec();
        return { status: true, items };
    } catch (error) {
        throw new Error("Error in retrieving all items: " + error.message);
    }
};

