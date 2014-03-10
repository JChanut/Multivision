angular.module('app').controller('mvSignupCtrl',['$location', 'mvAuth', 'mvNotifier',
    function($location, mvAuth, mvNotifier) {
    var vm = this;
    vm.signup = function() {
        var newUserData = {
            username: vm.email,
            password: vm.password,
            firstName: vm.fname,
            lastName: vm.lname
        };

        mvAuth.createUser(newUserData).then(function() {
            mvNotifier.notify('User account created');
            $location.path('/');
        }, function(reason) {
            mvNotifier.error(reason);
        })
    };
}]);
