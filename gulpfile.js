var gulp = require('gulp');
var karma = require('karma').server;
var mocha = require('gulp-mocha');
var exit = require('gulp-exit');
var jshint = require('gulp-jshint');

process.env.NODE_ENV = 'test';

gulp.task('default', ['test']);
gulp.task('test', ['mocha-test', 'karma-test']);


gulp.task('karma-test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
    }, done);
});

gulp.task('mocha-test', function () {
    return gulp.src(['test/mocha/**/*.js'], { read: false })
        .pipe(mocha({
            globals: {
                server: require('./server')
            }
        })).pipe(exit());
});

gulp.task('lint', function() {
    return gulp.src(['./public/app/**/*.js', './server/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


