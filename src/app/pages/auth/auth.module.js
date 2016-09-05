/**
 * Created by Lijingjing on 16/9/2.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.auth', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('auth', {
                url: '/auth',
                templateUrl: 'app/pages/auth/auth.html',
                controller: 'AuthCtrl'
            });
    }

})();
