var karma = require('karma');

karma.server.start(
    {
        // frameworks to use
        frameworks: ['mocha', 'chai', 'sinon-chai'],
        singleRun: true,
        browsers: ['PhantomJS'],
        // list of files / patterns to load in the browser
        files: [
            'public/vendor/underscore/underscore.js',
            'public/vendor/angular/angular.js',
            'public/vendor/angular-resource/angular-resource.js',
            'public/vendor/angular-mocks/angular-mocks.js',
            'test/karma/test-app.js',
            'public/app/**/*.js',
            'test/karma/**/*.js'
        ],


        // list of files to exclude
        exclude: [
            'public/app/app.js'
        ]
    }
);

//./node_modules/karma/bin/karma start --single-run --browsers PhantomJS
// NODE_ENV=test mocha test/mocha --recursive --require server.js
