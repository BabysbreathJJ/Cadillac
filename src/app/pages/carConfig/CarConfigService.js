/**
 * Created by Lijingjing on 16/9/2.
 */
/**
 * Created by Lijingjing on 16/9/1.
 */

(function () {
    'use strict';

    angular.module('BlurAdmin.pages.carConfig')
        .factory('CarConfigService', CarConfigService);

    /** @ngInject */
    function CarConfigService ($http, BaseUrl){

        var getCarsRequest = function (pageNo) {
            return $http({
                method: 'GET',
                url: BaseUrl + '/CarPlatform/cars/search?page=' + pageNo,
                crossDomain: true
            });
        };

        var getLinesRequest = function (){
            return $http({
                method: 'GET',
                url: BaseUrl + '/CarPlatform/lines',
                crossDomain: true
            });
        };

        var getConfigRequest = function(lineNo){
            return $http({
                method : 'GET',
                url : BaseUrl +'/CarPlatform/configurations/byline?line='+lineNo,
                crossDomain: true
            });
        };

        return {
            getCars: function (pageNo) {
                return getCarsRequest(pageNo);
            },
            getLines : function () {
                return getLinesRequest();
            },
            getConfig : function(lineNo){
                return getConfigRequest(lineNo);
            }
        }

    }


})();