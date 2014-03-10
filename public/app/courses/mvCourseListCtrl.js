angular.module('app').controller('mvCourseListCtrl', ['mvCourse', function (mvCourse) {
    var vm = this;
    vm.courses = mvCourse.query();
}]);
