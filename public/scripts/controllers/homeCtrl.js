myApp.controller('homeCtrl', function($scope, $q, allService) {


    


    //functionalit added
    allService.getAllData()
        .then(
            function(result) {
                console.log(result);
                $scope.allData = result;
                $scope.cData = result.images;
                $scope.mData = result.mobiles;
                $scope.sData = result.sport;
                $scope.images = result.clothes.image;
                console.log($scope.images);



            },
            function(error) {
                console.log(error.statusText);
            });


    allService.getClothes()
        .then(
            function(result) {
                console.log(result);

                $scope.cData = result.result;





            },
            function(error) {
                console.log(error.statusText);
            });

    allService.getMobiles()
        .then(
            function(result) {
                console.log(result);

                $scope.mData = result.result;





            },
            function(error) {
                console.log(error.statusText);
            });
    allService.getSport()
        .then(
            function(result) {
                console.log(result);

                $scope.sData = result.result;





            },
            function(error) {
                console.log(error.statusText);
            });


});