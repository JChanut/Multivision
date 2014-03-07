describe('mvUserListCtrl', function () {
    var scope, ctrl;

    beforeEach(function() {
        module('app');
        inject(function ($rootScope, $controller, mvUser) {
            scope = $rootScope.$new(),
                ctrl = $controller('mvUserListCtrl', {$scope: scope, mvUser: mvUser});
        });
    });

    describe('users', function () {
        it('should be an array', function () {
            scope.users.should.be.a('Array');
        });
    });
});
