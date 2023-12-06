const cartService = require('../service/cartServices');

const createCartControllerFn = async (req, res) => {
    try {
        console.log("Received cart request body:", req.body);
        const status = await cartService.createCartDBService(req.body);

        if (status) {
            res.send({ "status": true, "message": "Cart created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating cart" });
        }
    } catch (error) {
        console.error("Error in createCartControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};

const getCartControllerFn = async (req, res) => {
    try {
        const userId = req.params.userId;
        const result = await cartService.getCartDBService(userId);

        res.send(result);
    } catch (error) {
        console.error("Error in getCartControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};

const updateCartControllerFn = async (req, res) => {
    try {
        const userId = req.params.userId;
        const updatedCartDetails = req.body;
        const result = await cartService.updateCartDBService(userId, updatedCartDetails);

        if (result.status) {
            res.send({ "status": true, "message": "Cart updated successfully" });
        } else {
            res.send({ "status": false, "message": "Error updating cart" });
        }
    } catch (error) {
        console.error("Error in updateCartControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};



const deleteCartControllerFn = async (req, res) => {
    try {
        const userId = req.params.userId;
        const status = await cartService.deleteCartDBService(userId);

        if (status) {
            res.send({ "status": true, "message": "Cart deleted successfully" });
        } else {
            res.send({ "status": false, "message": "Error deleting cart" });
        }
    } catch (error) {
        console.error("Error in deleteCartControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};




const getAllItemsControllerFn = async (req, res) => {
    try {
        const status = await cartService.getAllItemsDBService();

        if (status) {
            res.send({ "status": true, "items": status.items });
        } else {
            res.send({ "status": false, "message": "Error retrieving all items" });
        }
    } catch (error) {
        console.error("Error in getAllItemsControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};


module.exports = { createCartControllerFn, getCartControllerFn, updateCartControllerFn , deleteCartControllerFn,  getAllItemsControllerFn,};
