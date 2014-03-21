var should = require('chai').should(),
    User = require('mongoose').model('User');

describe('User Model', function () {
    var user;

    beforeEach(function (done) {
        user = new User({
            firstName:'First name',
            lastName:'Last name',
            username:'user',
            salt: 'salt',
            hashed_pwd: 'hash',
            roles: ['admin']
        });

        done();
    });

    describe('Method Save', function () {
        it('should able to save without problem', function (done) {
            return user.save(function (err) {
                should.not.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without first name', function (done) {
            user.firstName = '';
            return user.save(function (err) {
                should.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without last name', function (done) {
            user.lastName = '';
            return user.save(function (err) {
                should.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without username', function (done) {
            user.username = '';
            return user.save(function (err) {
                should.exist(err);
                done();
            });
        });
    });

    afterEach(function(done) {
        User.remove({});
        done();
    });

    after(function(done) {
        User.remove().exec();
        done();
    });
});
