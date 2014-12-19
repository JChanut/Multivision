angular.module('app').controller('mvNavBarLoginCtrl', ['$http', '$location', 'mvNotifier', 'mvIdentity', 'mvAuth',
    function ($http, $location, mvNotifier, mvIdentity, mvAuth) {
    var vm = this;

    vm.identity = mvIdentity;

    vm.signin = function(username, password) {
        mvAuth.authenticateUser(username, password).then(function (success) {
            if (success) {
                mvNotifier.notify('You have successfully signed in!');
            }
            else {
                mvNotifier.notify('Username/Password combination incorrect');
            }
        });
    };

    vm.signout = function() {
        mvAuth.logoutUser().then(function () {
            vm.username = "";
            vm.password = "";
            mvNotifier.notify('You have successfully signed out!');
            $location.path('/');
        });
    };
}]);
