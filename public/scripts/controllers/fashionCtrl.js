myApp.controller('fashionCtrl', function($scope, $q, UserService) {
    UserService.getUserData()
        .then(
            function(result) {
                $scope.userData = result;
            },
            function(error) {
                console.log(error.statusText);
            });
});