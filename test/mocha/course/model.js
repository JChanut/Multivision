var should = require('chai').should(),
    Course = require('mongoose').model('Course');

describe('Course Model', function () {
    var course;

    beforeEach(function (done) {
        course = new Course({
            title: 'JavaScript for Sociopaths',
            featured: true,
            published: new Date('10/5/2013'),
            tags: ['JS', 'Javascript']
        });

        done();
    });

    describe('Save', function () {
        it('should able to save without problem', function (done) {
            return course.save(function (err) {
                should.not.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without title', function (done) {
            course.title = '';
            return course.save(function (err) {
                should.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without featured', function (done) {
            course.featured = null;
            return course.save(function (err) {
                should.exist(err);
                done();
            });
        });

        it('should be able to show an error when try to save without published date', function (done) {
            course.published = null;
            return course.save(function (err) {
                should.exist(err);
                done();
            });
        });
    });

    afterEach(function(done) {
        Course.remove({});
        done();
    });
    after(function(done) {
        Course.remove().exec();
        done();
    });
});

