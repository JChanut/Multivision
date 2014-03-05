var express = require('express'),
    stylus = require('stylus'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Application runing in ' + env + ' environment...');

var app = express();

// Stylus
function compile(str, path)
{
    return stylus(str).set('filename', path);
}

app.configure(function () {
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(stylus.middleware({
        src: __dirname + '/public',
        compile: compile
    }));
    app.use(express.static(__dirname + '/public'));
});

if (env == 'development'){
    mongoose.connect('mongodb://localhost/multivision');
}
else{
    mongoose.connect('mongodb://jchanut:multivision@ds031359.mongolab.com:31359/multivision-jchanut');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});

// Get data from mongodb
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function (err, messageDoc) {
    mongoMessage = messageDoc.message;
});


app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});


app.get('*', function (req, res) {
    res.render('index', {'mongoMessage' : mongoMessage});
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Listening on port ' + port + "...");