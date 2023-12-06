const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set('strictQuery',false);

var routes = require('./route/userroutes');
var cartroutes = require('./route/cartroutes');

var cors = require('cors');

app.get('/', (req, res) => {
    res.send('Hello, this is the root path!');
  });
app.listen(3008,function check(error){
    if(error)
    console.log("Error........");
    else
    console.log("Started");
});




mongoose.connect('mongodb://127.0.0.1:27017/Hmart');
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Failed to connect with db');
});
db.once('open', () => {
    console.log('Connected with db');
});

  app.use(express.json());
  app.use(routes,cartroutes);