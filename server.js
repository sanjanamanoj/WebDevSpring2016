var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser  = require('cookie-parser');
var multer = require('multer');
var passport = require('passport');
var uuid = require('node-uuid');
var nodemailer = require('nodemailer');

var router = express.Router();
// install and require the mongoose library
var mongoose      = require('mongoose');

var connectionString = 'mongodb://sanjana:icb01873S!@ds163612.mlab.com:63612/form-maker';


if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
    connectionString =  process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PORT + "/" +
            process.env.OPENSHIFT_APP_NAME;
}


var db = mongoose.connect(connectionString,{ useMongoClient: true });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(session({
       secret: 'this is the secret',
        resave: true,
        saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.PORT || 3000; //process.env.OPENSHIFT_NODEJS_PORT ||

app.get('/env', function(req, res){
    res.json(process.env);
});

//router.get("/");
//router.post("/send",function(req,res,next){

//});

require("./public/assignment/server/app.js")(app, db, mongoose);
require("./public/project/server/app.js")(app,db,mongoose,uuid);

app.listen(port, function() {
    console.log('Listening to port...'+ port);
});