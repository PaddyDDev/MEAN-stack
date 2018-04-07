const express = require('express');
const path = require('path');
//const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const appRoutes = require('./routes/app');
const messageRoutes = require('./routes/messages');
//const userRoutes = require('./routes/user');
//const temperatureRoutes = require('./routes/temperatures');

const app = express();
//mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/temperature').then(res => console.log(res));
   /* if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
    
});*/
//mongoose.connect('mongodb://<test>:<test>@ds011472.mlab.com:11472/temp_sense_db').then(res => console.log(res));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

//order is important as if I have appRoutes first, every request would
//be handled by it
//app.use('/user', userRoutes);
//app.use('/temperature', temperatureRoutes);
app.use('/message', messageRoutes);
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res) {
    return res.render('index');
});


module.exports = app;
