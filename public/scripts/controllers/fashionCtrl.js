myApp.controller('fashionCtrl', function($scope, $q, allService) {
    //functionalit added
   


    // myApp.filter('unique', function() {

    //         return function(collection, keyname) {

    //             var output = [],
    //                 keys = [];

    //             angular.forEach(collection, function(item) {

    //                 var key = item[keyname];
    //                 if (keys.indexOf(key) === -1) {

    //                     keys.push(key);
    //                     output.push(item);
    //                 }
    //             });
    //         return output;

    //     };


    // });

    myApp.filter('unique', function() {

        return function(items, filterOn) {

            if (filterOn === false) {
                return items;
            }

            if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
                var hashCheck = {},
                    newItems = [];

                var extractValueToCompare = function(item) {
                    if (angular.isObject(item) && angular.isString(filterOn)) {
                        return item[filterOn];
                    } else {
                        return item;
                    }
                };

                angular.forEach(items, function(item) {
                    var valueToCheck, isDuplicate = false;

                    for (var i = 0; i < newItems.length; i++) {
                        if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                            isDuplicate = true;
                            break;
                        }
                    }
                    if (!isDuplicate) {
                        newItems.push(item);
                    }

                });
                items = newItems;
            }
            return items;
        };
    });


    // $scope.fashionData;
    //  $scope.selectedBrands = ['biba','Vero Moda'];
    allService.getClothes()

        .then(
            function(result) {
                var brands = {};
                var text = [];
                // $scope.data = result;
                $scope.fashionData = result;
                // $scope.fashionData = $scope.data;
                for (var i = 0; i < result.length; i++) {
                    if (!brands[result[i].brand]) {
                        brands[result[i].brand] = true;
                        text.push(result[i].brand);
                    }


                }
                for (var i = 0; i < text.length; i++) {
                    console.log(text[i]);
                    $scope.textBox = text;

                }
            },
            function(error) {
                console.log(error.statusText);
            });
    // var arr = [];

    $scope.search={'Tommy Hilfiger':true};


    // $scope.searchItem =function(){
    // 	$scope.search;
    // 	console.log($scope.search);
    // 	   $scope.fashionData;
    // 	   $scope.data;
    // }
    // $scope.searchItem.push($scope.search);
    $scope.searchBy = function() {
        return function(fashion) {
            console.log(fashion);

            // var count = 0;
            if ($scope.search[fashion.brand] === true) {
                console.log("a");
                return true;
            } else {
                console.log('fhsdjhs');
                // count++;
                // arr.push(fashion);

            }

        }
    };



})
// .filter('selectedBrand',function(){
//      	return function(fashionData ,selectedBrands){
//      		return fashionData.filter(function(fashion){
//      			angular.forEach(fashion ,function(value ,key){
//      				if(selectedBrands.indexOf(value) !==-1){
//      					return true;
//      				}
//      			})
//      			return false;
//      		});
//      	};
//  });