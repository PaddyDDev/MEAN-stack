const express = require('express');
const router = express.Router();
//const User = require('../models/user');

//get the data from the database. Temperature????
//need to define some things

/*
    catch 404 and forward to error handler
*/
router.get('/', function (req, res,) {
    res.render('index');

});

module.exports = router;
