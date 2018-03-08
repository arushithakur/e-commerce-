// var myApp = angular.module('myApp', []);
// myApp.service('userService', function($scope,$http) {
//         this.getUsers =function() {
//             return $http.get(‘userData.json’);
//         }
//     })



angular.module('myApp').service('allService', function($http, $q,$stateParams) {




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
        return $http.get('/allClothes')
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


    this.getMobiles = function() {

        var deferred = $q.defer();
        //client side
       //  return $http.get('./assets/mock.json')
       //server side
       return $http.get('/allMobiles')
            .then(function(response) {

                // promise is fulfilled
                //client side
               // deferred.resolve(response.data.mobiles);
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

   

    this.getOneMobile = function() {
         var id = $stateParams.id;
        var deferred = $q.defer();
        //client side
       //  return $http.get('./assets/mock.json')
       //server side
       console.log("in get one mobile service, id I have:",id)
       return $http.get('/getMobile/' + id)
            .then(function(response) {

                // promise is fulfilled
                //client side
               // deferred.resolve(response.data.mobiles);
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



    this.getSport = function() {
        var deferred = $q.defer();
      //  return $http.get('./assets/mock.json')
       return $http.get('/allSports')
            .then(function(response) {

                // promise is fulfilled
               // deferred.resolve(response.data.sport);
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



    this.setId = function(id) {


        //$localStorage.Id=id;
        // obj={};
        // obj['key']=id;
        // localStorage.setItem('arushi',obj); 
        localStorage.setItem("id", id);
        //console.log(obj);
    }

    this.getId = function() {

        // localStorage.getItem(obj);
        // return obj.key;
        var id = localStorage.getItem("id");
        return id;
    }
    var cart = [];
    this.setCart = function(product) {

      
        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));
       

    }


     
  
    this.getCart = function() {


        var data = localStorage.getItem("cart");
        var products = JSON.parse(data);
        console.log(products);
        return products;
    }



});