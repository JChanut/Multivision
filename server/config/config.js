var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 3000,
        db: 'mongodb://192.168.99.100/multivision',
        createDefaultData: true
    },
    test: {
        rootPath: rootPath,
        port: process.env.PORT || 3001,
        db: 'mongodb://192.168.99.100/multivision-test',
        createDefaultData: false
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80,
        db: 'mongodb://jchanut:multivision@ds031359.mongolab.com:31359/multivision-jchanut',
        createDefaultData: true
    }
};
