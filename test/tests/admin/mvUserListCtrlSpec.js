describe('mvUserListCtrl', function () {
    var ctrl;

    beforeEach(function() {
        module('app');
        inject(function ($controller, mvUser) {
            ctrl = $controller('mvUserListCtrl', {mvUser: mvUser});
        });
    });

    describe('users', function () {
        it('should be an array', function () {
            ctrl.users.should.be.a('Array');
        });
    });
});
