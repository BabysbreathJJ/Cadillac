/**
 * Created by Lijingjing on 16/9/1.
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.carConfig')
        .controller('CarConfigCtrl', CarConfigCtrl)
        .filter('price', function () {
            var filter = function (input) {
                return input + '万';
            };
            return filter;
        });

    /** @ngInject */
    function CarConfigCtrl($scope, $filter, editableOptions, editableThemes, CarConfigService) {
        $scope.smartTablePageSize = 10;
        $scope.pagination = {currentPage: 1};

        $scope.getCars = function (pageNo) {
            CarConfigService.getCars(pageNo).success(function (data, status) {
                $scope.cars = data.data;
                $scope.pagination.totalItems = data.pages;
            });
        };

        $scope.getCars(1);


        $scope.opened = {};

        $scope.open = function ($event, elementOpened) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened[elementOpened] = !$scope.opened[elementOpened];
        };

        CarConfigService.getLines().success(function (data, status) {
            $scope.lines = data.data;
        });

        $scope.getConfigs = function (lineNo) {
            CarConfigService.getConfig(lineNo).success(function (data, status) {
                $scope.configs = data.data;
            });
        };

        $scope.editRow = function (rowform, lineId) {
            $scope.clearConfigsColors();
            rowform.$show();
            $scope.getConfigs(lineId);
            //    之后添加获得颜色的函数
        };

        $scope.clearConfigsColors = function(){
            $scope.configs = [];
            $scope.colors = [];
        };

        $scope.colors = [
            {name: '红'},
            {name: '白'},
            {name: '金'},
            {name: '黑'},
            {name: '粉'},
            {name: '蓝'}
        ];



        $scope.showAddTime = function (car) {
            if ((typeof car.addTime == 'string') && car.addTime !== ""){
                var myDate = car.addTime.split('-');
                var year = myDate[0];
                var month = myDate[1];
                var day = myDate[2];
                car.addTime = new Date(year, month, day);
                return car.addTime;
            }
            return '';


        };

        $scope.removeCar = function (index) {
            $scope.clearConfigsColors();
            $scope.cars.splice(index, 1);

            $scope.pageChanged();
            //    之后要和后台交互
        };

        $scope.addCar = function () {
            $scope.clearConfigsColors();
            $scope.inserted = {
                id: null,
                name: '',
                serial: null,
                configuration: {id: null, name: null},
                interiorColor: null,
                addTime: '',
                price: "",
                dealer: {id: 2}
            };
            $scope.cars.unshift($scope.inserted);
        };

        $scope.formatDate = function (myDate) {
            if(myDate.length)
            {
                var year = myDate.getFullYear();
                var tempMonth = myDate.getMonth() + 1;
                var month = tempMonth > 9 ? tempMonth : '0' + tempMonth;
                var tempDay = myDate.getDate();
                var day = tempDay > 9 ? tempDay : '0' + tempDay;
                var formatDate = year + '-' + month + '-' + day;
                return formatDate;
            }
            else return "";

        };

        $scope.checkPrice = function (data) {
            if (isNaN(data)) {
                return "价格必须为数字!";
            }

        };

        $scope.saveCar = function (data) {

            var addTime = data.addTime;
            var newData = data;
            if (addTime !== '' && addTime !== null)
                newData.addTime = $scope.formatDate(addTime);
            console.log(newData);

        };


        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


        //    分页逻辑

        $scope.setPage = function (pageNo) {
            $scope.pagination.currentPage = pageNo;
        };

        $scope.itemNum = 5;

        $scope.pageChanged = function () {
            $scope.getCars($scope.pagination.currentPage);
        };

    }

})();