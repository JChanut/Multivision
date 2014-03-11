angular.module('app').controller('mvCourseDetailCtrl', ['mvCachedCourse', '$routeParams',
    function(mvCachedCourse, $routeParams) {
        var mv = this;

        mvCachedCourse.query().$promise.then(function (collection) {
            collection.forEach(function(course) {
                if (course._id === $routeParams.id) {
                    mv.course = course;
                }
            })
        });
    }]
);
