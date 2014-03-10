angular.module('app').controller('mvMainCtrl', ['mvCachedCourse', function(mvCachedCourse) {
    var vm = this;
    vm.courses = mvCachedCourse.query();
}]);

