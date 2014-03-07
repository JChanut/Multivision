describe('mvMainCtrl', function () {
    var scope, ctrl;

    beforeEach(function() {
        module('app');
        inject(function ($rootScope, $controller) {
            scope = $rootScope.$new(),
            ctrl = $controller('mvMainCtrl', {$scope: scope});
        });
    });

    describe('courses', function () {
        it('should be an array', function() {
            scope.courses.should.be.a('Array');
        })

        it('should return all courses', function() {
            scope.courses.should.have.length(15);
        });
    });
});
