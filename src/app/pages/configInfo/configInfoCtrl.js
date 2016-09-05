/**
 * Created by Lijingjing on 16/9/2.
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.configInfo')
        .controller('ConfigInfoCtrl', ConfigInfoCtrl);

    /** @ngInject */
    function ConfigInfoCtrl($scope, $filter, ConfigInfoService) {

        $scope.lines = ConfigInfoService.getLines();


        $scope.$on('configs', function (d, data) {
            //ConfigInfoService.getConfigs(data).success(function(data){
            //    $scope.configs = data;
            //});

            $scope.configs = ConfigInfoService.getConfigs(data);

        });

        $scope.$on('colors', function (d, data) {
            //console.log('colors start');
            $scope.colors = ConfigInfoService.getColors(data);
        });

        $scope.edit = false;

        $scope.startEdit = function(){
            $scope.edit = true;
            $scope.$broadcast('edit', true);
        };

        $scope.cancelEdit = function(){
            $scope.edit = false;
            $scope.$broadcast('edit', false);
        };


    }

})();