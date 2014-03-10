angular.module('app').controller('mvUserListCtrl', ['mvUser', function (mvUser) {
    var vm = this;
    vm.users = mvUser.query();
}]);
