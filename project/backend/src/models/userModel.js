var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var userSchema = new Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required:true
      
    }
  });
  


const user = mongoose.model('user', userSchema);
module.exports = user;
