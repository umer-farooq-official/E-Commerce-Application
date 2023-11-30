const userService = require('../service/userServices');


var createUserControllerFn = async (req, res) => {
    try {
        console.log(req.body);
        var status = await userService.createUserDBService(req.body);
        console.log(status);

        if (status) {
            res.send({ "status": true, "message": "User Created Successfully" });
        }
        else {
            res.send({ "status": false, "message": "Error Creating User" });
        }




    }
    catch (error) {
        console.log(error);
    }


}

var loginUserControllerFn = async (req, res) => {

    try {
        console.log(req.body);
        var status = await userService.loginUserDBService(req.body);
        console.log(status);

        if (status) {
            res.send({ "status": true, "message": status.msg });
        } else {
            res.send({ "status": false, "message": status.msg });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

module.exports = { createUserControllerFn, loginUserControllerFn };