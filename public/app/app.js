/**
 * Created by jchanut on 04/03/14.
 */

angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {
            auth: function (mvAuth) {
                return mvAuth.authorizeCurrentUserForRoute('admin'); }
        },
        user: {
            auth: function(mvAuth) {
                return mvAuth.authorizeAuthenticatedUserForRoute();
            }
        }
    };

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', { templateUrl: '/partials/main/main' })
        .when('/admin/users', {templateUrl: '/partials/admin/user-list', resolve: routeRoleChecks.admin})
        .when('/signup', {templateUrl: '/partials/account/signup' })
        .when('/profile', {templateUrl: '/partials/account/profile', resolve: routeRoleChecks.user })
        .when('/courses', {templateUrl: '/partials/courses/course-list'})
        .when('/courses/:id', {templateUrl: '/partials/courses/course-details'});
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    });
});
