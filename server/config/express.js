var logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    serveStatic = require('serve-static'),
    passport = require('passport'),
    stylus = require('stylus');

module.exports = function (app, config) {
    function stylusCompile(str, path) {
        return stylus(str).set('filename', path);
    }

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.use(logger('dev')); // Logger middleware
    app.use(bodyParser());
    app.use(cookieParser());
    app.use(session({secret: 'multi vision unicorns'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(stylus.middleware({
        src: config.rootPath + '/public',
        compile: stylusCompile
    }));

    app.use(serveStatic(config.rootPath + '/public'));
};
