angular.module('app').controller('mvProfileCtrl', ['mvAuth', 'mvIdentity', 'mvNotifier',
    function (mvAuth, mvIdentity, mvNotifier) {
        var mv = this;

        mv.email = mvIdentity.currentUser.username;
        mv.fname = mvIdentity.currentUser.firstName;
        mv.lname = mvIdentity.currentUser.lastName;

        mv.update = function() {
            var newUserData = {
                username: mv.email,
                firstName: mv.fname,
                lastName: mv.lname
            };

            if(mv.password && mv.password.length > 0) {
                newUserData.password = mv.password;
            }

            mvAuth.updateCurrentUser(newUserData).then(function () {
                mvNotifier.notify('Your user account has been updated');
            }, function (reason) {
                mvNotifier.error(reason);
            });
        };
}]);
