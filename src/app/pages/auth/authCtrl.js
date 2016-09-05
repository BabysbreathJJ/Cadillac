/**
 * Created by Lijingjing on 16/9/2.
 */


(function () {
    'use strict';

    angular.module('BlurAdmin.pages.auth')
        .controller('AuthCtrl', AuthCtrl);

    /** @ngInject */
    function AuthCtrl($scope, $rootScope, AUTH_EVENTS, AuthService) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.login = function (credentials) {
            AuthService.login(credentials).then(function (user) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                $scope.setCurrentUser(user);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };

    }

})();