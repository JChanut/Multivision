var express = require('express'),
    passport = require('passport'),
    stylus = require('stylus');

module.exports = function (app, config) {
    function stylusCompile(str, path) {
        return stylus(str).set('filename', path);
    }

    app.configure(function () {
        app.set('views', config.rootPath + '/server/views');
        app.set('view engine', 'jade');
        app.use(express.logger('dev'));
        app.use(express.cookieParser());
        app.use(express.bodyParser());
        app.use(express.session({secret: 'multi vision unicorns'}));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(stylus.middleware({
            src: config.rootPath + '/public',
            compile: stylusCompile
        }));
        app.use(express.static(config.rootPath + '/public'));
    });
};