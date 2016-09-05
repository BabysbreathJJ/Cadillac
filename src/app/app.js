'use strict';

angular.module('BlurAdmin', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.sortable',
        'ui.router',
        'ngTouch',
        'toastr',
        'smart-table',
        "xeditable",
        'ui.slimscroll',
        'ngJsTree',
        'angular-progress-button-styles',
        'BlurAdmin.constants',
        'BlurAdmin.theme',
        'BlurAdmin.pages'
    ]);
    //.run(function ($rootScope, AUTH_EVENTS, AuthService) {
    //    $rootScope.$on('$stateChangeStart', function (event, next) {
    //        var authorizedRoles = next.data.authorizedRoles;
    //        if (!AuthService.isAuthorized(authorizedRoles)) {
    //            event.preventDefault();
    //            if (AuthService.isAuthenticated()) {
    //                // user is not allowed
    //                $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
    //            } else {
    //                // user is not logged in
    //                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
    //            }
    //        }
    //    });
    //});

angular.module('BlurAdmin.constants', [])
    .constant('BaseUrl', 'http://192.168.0.119:8080')
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })
    .constant('USER_ROLES', {
        all: '*',
        sales: 'sales',
        provider: 'provider'
    });

