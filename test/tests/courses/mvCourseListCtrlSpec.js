describe('mvCourseListCtrl', function () {
    var $httpBackend, mvCachedCourse, createController;

    beforeEach(function() {
        module('app');
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            mvCachedCourse = $injector.get('mvCachedCourse');

            // Fake data
            $httpBackend.when('GET', '/api/courses').respond([
                {title: 'C# for Sociopaths', featured: true, published: new Date('10/5/2013'), tags: ['C#']},
            ]);

            var $controller = $injector.get('$controller');

            createController = function() {
                return $controller('mvCourseListCtrl', {'mvCachedCourse': mvCachedCourse});
            }
        });
    });

    describe('courses', function () {
        it('should be an array', function () {
            var ctrl = createController();
            $httpBackend.flush();
            ctrl.courses.should.be.a('Array');
        });

        it('should return all courses', function() {
            var ctrl = createController();
            $httpBackend.flush();
            ctrl.courses.should.have.length(1);
        });
    });
});