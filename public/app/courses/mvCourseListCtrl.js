angular.module('app').controller('mvCourseListCtrl', ['mvCachedCourse', function (mvCachedCourse) {
    var vm = this;
    vm.courses = mvCachedCourse.query();

    vm.sortOptions = [
        {value: 'title', text: 'Sort by title'},
        {value: 'published', text: 'Sort by published data'}
    ];

    vm.sortOrder = vm.sortOptions[0].value;
}]);
