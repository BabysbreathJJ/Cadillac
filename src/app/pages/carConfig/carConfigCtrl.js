/**
 * Created by Lijingjing on 16/9/1.
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.carConfig')
        .controller('CarConfigCtrl', CarConfigCtrl);

    /** @ngInject */
    function CarConfigCtrl($scope, $filter, editableOptions, editableThemes) {
        $scope.smartTablePageSize = 10;

        $scope.cars = [
            {
                "id": 88,
                "number": "SHMAC001",
                "type": 1,
                "config": 1,
                "color": 1,
                "storageTime": '2015-01-01',
                "price": "39.9万"
            },
            {
                "id": 32,
                "number": "SHMAC001",
                "type": 2,
                "config": 2,
                "color": 2,
                "storageTime": '2015-01-01',
                "price": "41.88万"
            }

        ];


        $scope.types = [
            {value: 1, text: 'SRX'},
            {value: 2, text: 'CT6'}
        ];

        $scope.configs = [
            {value: 1, text: '2016款'},
            {value: 2, text: '2015款'}
        ];

        $scope.colors = [
            {value: 1, text: '红'},
            {value: 2, text: '白'}
        ];


        $scope.showType = function (car) {
            var selected = [];
            if (car.type) {
                selected = $filter('filter')($scope.types, {value: car.type});
            }
            return selected.length ? selected[0].text : '未设置';
        };

        $scope.showConfig = function (car) {
            var selected = [];
            if (car.config) {
                selected = $filter('filter')($scope.configs, {value: car.config});
            }
            return selected.length ? selected[0].text : '未设置';
        };

        $scope.showColor = function (car) {
            var selected = [];
            if (car.config) {
                selected = $filter('filter')($scope.colors, {value: car.color});
            }
            return selected.length ? selected[0].text : '未设置';
        };


        $scope.removeCar = function (index) {
            $scope.cars.splice(index, 1);
            //    之后要和后台交互
        };

        $scope.addCar = function () {
            $scope.inserted = {
                id: null,
                name: '',
                type: null,
                config: null,
                color: null,
                storageTime: '',
                price: ""
            };
            $scope.cars.push($scope.inserted);
        };


        $scope.saveCar = function (data, id) {
            console.log(data);
            console.log(id);

        };



        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

    }

})();