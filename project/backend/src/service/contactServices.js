const Contact = require('../models/contactModel');

module.exports.createContactDBService = (contactDetails) => {
    console.log("Received contact details in createContactDBService:", contactDetails);

    return new Promise((resolve, reject) => {
        try {
            const contactData = new Contact(contactDetails);

            contactData.save()
                .then(result => {
                    console.log("Contact saved successfully:", result);
                    resolve(true);
                })
                .catch(error => {
                    console.error("Error saving contact:", error);
                    reject(false);
                });
        } catch (error) {
            console.error("Unexpected error in createContactDBService:", error);
            reject(false);
        }
    });
};



module.exports.getAllContactsDBService = async () => {
    try {
        const contacts = await Contact.find().exec();
        return { status: true, contacts };
    } catch (error) {
        throw new Error("Error in retrieving all contacts: " + error.message);
    }
};
