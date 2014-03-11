describe('mvUser', function () {
    beforeEach(module('app'));

    describe('isAdmin', function () {
        it('should return false if the roles array does not have an admin entry', inject(function (mvUser) {
            var user = new mvUser();
            user.roles = ['not admin', 'simple user'];
            user.isAdmin().should.be.false;
        }));

        it('should return true if the roles array has an admin entry', inject(function (mvUser) {
            var user = new mvUser();
            user.roles = ['admin'];
            user.isAdmin().should.be.true;
        }));
    });
});
