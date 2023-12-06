const contactService = require('../service/contactServices');

const createContactControllerFn = async (req, res) => {
    try {
        console.log("Received contact request body:", req.body);
        const status = await contactService.createContactDBService(req.body);

        if (status) {
            res.send({ "status": true, "message": "Contact Created Successfully" });
        } else {
            res.send({ "status": false, "message": "Error Creating Contact" });
        }
    } catch (error) {
        console.error("Error in createContactControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};


const getAllContactsControllerFn = async (req, res) => {
    try {
        const status = await contactService.getAllContactsDBService();

        if (status) {
            res.send({ "status": true, "contacts": status.contacts });
        } else {
            res.send({ "status": false, "message": "Error retrieving all contacts" });
        }
    } catch (error) {
        console.error("Error in getAllContactsControllerFn:", error);
        res.send({ "status": false, "message": "Internal Server Error" });
    }
};



module.exports = { createContactControllerFn,getAllContactsControllerFn, };
