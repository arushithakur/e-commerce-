// var myApp = angular.module('myApp', []);
// myApp.service('userService', function($scope,$http) {
//         this.getUsers =function() {
//             return $http.get(‘userData.json’);
//         }
//     })



angular.module('myApp').service('UserService', function($http, $q) {


    var deferred = $q.defer();

    this.getUserData = function() {
        return $http.get('./userData.json')
            .then(function(response) {
            	
                // promise is fulfilled
                deferred.resolve(response.data.people);
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