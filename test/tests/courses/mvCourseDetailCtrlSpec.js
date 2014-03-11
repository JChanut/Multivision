describe('mvCourseDetailCtrl', function () {
    var $httpBackend, routeParams, mvCachedCourse, createController;

    beforeEach(function() {
        module('app');
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            mvCachedCourse = $injector.get('mvCachedCourse');
            routeParams = {};

                // Fake data
            $httpBackend.when('GET', '/api/courses').respond([
                {_id: 1, title: 'C# for Sociopaths', featured: true, published: new Date('10/5/2013'), tags: ['C#']},
                {_id: 2, title: 'Super Duper Expert C#', featured: false, published: new Date('10/1/2013'), tags: ['C#']}
            ]);

            var $controller = $injector.get('$controller');

            createController = function() {
                return $controller('mvCourseDetailCtrl', {'mvCachedCourse': mvCachedCourse, '$routeParams': routeParams});
            }
        });
    });

    describe('course', function () {
        it('should be an object', function () {
            routeParams.id = 1;
            var ctrl = createController();
            $httpBackend.flush();
            var course = ctrl.course;
            course.should.be.a('Object');
            course.should.have.property('_id');
            course.should.have.property('title');
            course.should.have.property('published');
            course.should.have.property('featured');
            course.should.have.property('tags');
        });

        it('should be the the right course', function() {
            routeParams.id = 2;
            var ctrl = createController();
            $httpBackend.flush();
            var course = ctrl.course;
            course._id.should.equal(2);
            course.title.should.equal('Super Duper Expert C#');
        });
    });
});