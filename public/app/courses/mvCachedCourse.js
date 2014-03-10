angular.module('app').factory('mvCachedCourse', ['mvCourse', function (mvCourse) {
    var courseList;

    return {
        query: function () {
            if (!courseList) {
                courseList = mvCourse.query();
            }

            return courseList;
        }
    };
}]);
