// var myApp = angular.module('myApp', []);
// myApp.service('userService', function($scope,$http) {
//         this.getUsers =function() {
//             return $http.get(‘userData.json’);
//         }
//     })



angular.module('myApp').service('allService', function($http, $q) {


  

    this.getAllData = function() {
    	  var deferred = $q.defer();
        return $http.get('./assets/mock.json')
            .then(function(response) {
            	
                // promise is fulfilled
                deferred.resolve(response.data);
                // promise is returned
                return deferred.promise;
            }, function(response) {
                // the following line rejects the promise 
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            });
    };




    this.getClothes = function() {

     var deferred = $q.defer();
        return $http.get('./assets/mock.json')
            .then(function(response) {
            	
                // promise is fulfilled
                deferred.resolve(response.data.clothes);
                // promise is returned
                return deferred.promise;
            }, function(response) {
                // the following line rejects the promise 
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            });
    };


    this.getMobiles = function() {

     var deferred = $q.defer();
        return $http.get('./assets/mock.json')
            .then(function(response) {
            	
                // promise is fulfilled
                deferred.resolve(response.data.mobiles);
                // promise is returned
                return deferred.promise;
            }, function(response) {
                // the following line rejects the promise 
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            });
    };
     

    this.getSport = function() {
    	var deferred = $q.defer();
        return $http.get('./assets/mock.json')
            .then(function(response) {
            	
                // promise is fulfilled
                deferred.resolve(response.data.sport);
                // promise is returned
                return deferred.promise;
            }, function(response) {
                // the following line rejects the promise 
                deferred.reject(response);
                // promise is returned
                return deferred.promise;
            });
    };
});



