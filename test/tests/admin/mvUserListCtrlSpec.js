describe('mvUserListCtrl', function () {
    var $httpBackend, mvUser, createController;

    beforeEach(function() {
        module('app');
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            mvUser = $injector.get('mvUser');

            // fake data
            $httpBackend.when('GET', '/api/users').respond([
                {firstName:'Jerry', lastName:'Chanut', username:'jerry', salt: '', hashed_pwd: '', roles: ['admin']},
                {firstName:'Joe', lastName:'Eames', username:'joe', salt: '', hashed_pwd: '', roles: ['admin']}
            ]);

            var $controller = $injector.get('$controller');
            createController = function() {
                return $controller('mvUserListCtrl', {'mvUser': mvUser});
            }
        });
    });

    describe('users', function () {
        it('should be an array', function () {
            var ctrl = createController();
            $httpBackend.flush();
            ctrl.users.should.be.a('Array');
        });

        it('should return all users', function() {
            var ctrl = createController();
            $httpBackend.flush();
            ctrl.users.should.have.length(2);
        });
    });
});
