angular.module('app').controller('mvCourseDetailCtrl', ['mvCachedCourse', '$routeParams', 'mvUnderscore',
    function(mvCachedCourse, $routeParams, _) {
        var mv = this;

        mvCachedCourse.query().$promise.then(function(collection) {
            _.each(collection, function(course) {
                if (course._id === $routeParams.id) {
                    mv.course = course;
                }
            })
        });
    }]
);
