/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages', [
            'ui.router',

            //'BlurAdmin.pages.dashboard',
            //'BlurAdmin.pages.ui',
            //'BlurAdmin.pages.components',
            //'BlurAdmin.pages.form',
            //'BlurAdmin.pages.tables',
            //'BlurAdmin.pages.charts',
            //'BlurAdmin.pages.maps',
            //'BlurAdmin.pages.profile',
            'BlurAdmin.pages.carConfig',
            'BlurAdmin.pages.configInfo',
            //'BlueAdmin.pages.auth'


        ])
        .config(routeConfig);
        //.controller('ApplicationController', function ($scope,
        //                                               USER_ROLES,
        //                                               AuthService) {
        //    $scope.currentUser = null;
        //    $scope.userRoles = USER_ROLES;
        //    $scope.isAuthorized = AuthService.isAuthorized;
        //
        //    $scope.setCurrentUser = function (user) {
        //        $scope.currentUser = user;
        //    };
        //});

    /** @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/auth');

    }

})();
