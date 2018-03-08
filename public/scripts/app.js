var myApp = angular.module('myApp', ['ui.router','rzModule']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: './views/home.html',
            controller:'homeCtrl'
            
        })

        .state('mobile', {
            url: '/mobile',
            templateUrl: './views/mobile.html',
            controller:'mobileCtrl'
            
        })

        .state('fashion', {
            url: '/fashion',
            templateUrl: './views/fashion.html',
            controller:'fashionCtrl'
           
        })

         .state('sports', {
            url: '/sports',
            templateUrl: './views/sports.html',
            controller:'sportsCtrl'
            
        })
         .state('television', {
            url: '/television',
            templateUrl: 'views/television.html',
            
        })

         .state('cart', {
            url: '/cart',
            templateUrl: 'views/cart.html',
            controller:'cartCtrl'
            
        })
           .state('fashionProduct', {
            url: '/fashionProduct',
            templateUrl: './views/fashionProduct.html',
            controller:'fashionProductCtrl'
            
        })

           .state('mobileProduct', {
            url: '/mobileProduct/:id',
            templateUrl: './views/mobileProduct.html',
            controller:'mobileProductCtrl'
            
        })

           .state('sportsProduct', {
            url: '/sportsProduct',
            templateUrl: './views/sportsProduct.html',
            controller:'sportsProductCtrl'
            
        })

        //   .state('admin', {
        //     url: '/admin',
        //     templateUrl: 'views/admin.html'
            
        // })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });

});
myApp.controller('mainCtrl',function($scope,$state){
    $scope.initFunction=function(){
        $state.go('home');
    }
})