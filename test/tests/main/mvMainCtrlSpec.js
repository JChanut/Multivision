describe('mvMainCtrl', function () {
    var ctrl;

    beforeEach(function() {
        module('app');
        inject(function ($controller) {
            ctrl = $controller('mvMainCtrl');
        });
    });

    describe('courses', function () {
        it('should be an array', function() {
            ctrl.courses.should.be.a('Array');
        })

        it('should return all courses', function() {
             ctrl.courses.should.have.length(15);
        });
    });
});
