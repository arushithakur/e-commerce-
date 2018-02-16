myApp.controller('fashionCtrl', function($scope, $q, UserService) {
	//functionalit added
    UserService.getUserData()
        .then(
            function(result) {
                $scope.userData = result;
            },
            function(error) {
                console.log(error.statusText);
            });
});