var userModel = require('../models/userModel');
var key = '123456trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createUserDBService = (userDetails) => {
    return new Promise((resolve, reject) => {
        var userModelData = new userModel();
        userModelData.firstname = userDetails.firstname;
        userModelData.lastname = userDetails.lastname;
        userModelData.email = userDetails.email;
        userModelData.password = encryptor.encrypt(userDetails.password);

        userModelData.save()
            .then(result => {
                resolve(true);
            })
            .catch(error => {
                console.error(error);
                reject(false);
            });
    });
}


module.exports.loginUserDBService = async (loginDetails) => {
    try {
        const user = await userModel.findOne({ email: loginDetails.email }).exec();

        if (!user) {
            throw new Error("User not found");
        }

        var decryptedPassword = encryptor.decrypt(user.password);

        if (decryptedPassword === loginDetails.password) {
            return { status: true, msg: "User validated successfully" };
        } else {
            throw new Error("Invalid password");
        }
    } catch (error) {
        throw new Error("Error in login process: " + error.message);
    }
};
