var should = require('chai').should(),
    User = require('mongoose').model('User');

describe('User Model', function () {
    var user, user2;

    beforeEach(function (done) {
        user = new User({
            firstName:'First name',
            lastName:'Last name',
            username:'user',
            salt: 'salt',
            hashed_pwd: 'hash',
            roles: ['admin']
        });
        user2 = new User(user);

        done();
    });

    describe('Method Save', function () {

//        it('should begin with no users', function(done) {
//            User.find({}, function(err, users) {
//                users.should.have.length(0);
//                done();
//            });
//        });

        it('should able to save without problem', function (done) {
            return user.save(done);
        });

        it('should fail to save an existing user again', function (done) {
            user.save();
            return user2.save(function (err) {
                should.exist(err);
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

        it('should be able to show an error when try to save without salt', function (done) {
            user.salt = '';
            return user.save(function (err) {
                should.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without hashed password', function (done) {
            user.hashed_pwd = '';
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
