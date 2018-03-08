myApp.controller('fashionCtrl', function($scope, $q, allService,$state) {
        //functionalit added

        $scope.brandfilter = [];
        var brand = ["Biba", "Vero Moda", "Tommy Hilfiger", "Louis Philippe", "Peter England"];
        $scope.brands = brand;
        $scope.slider = {
            min: 0,
            max: 1800,
            options: {
                floor: 0,
                ceil: 1800,
            },
        }


        allService.getClothes()
            .then(function(result) {

                    $scope.fashionData = result.result;


                },

                function(error) {

                    console.log(error.statusText);
                }

            )

             $scope.filterFn = function()
    {
        return function(item){
            return ((item['price'] >= $scope.slider.min) && (item['price']<=$scope.slider.max)) ;
        }
    };




        /*setId = function(id) {
            allService.setId(id)

                .then(function(result) {

                        console.log("Id set in local storage", id);
                    },
                    function(error) {

                        console.log(error.statusText);
                    }

                )
        }*/
         $scope.setId = function(id) {
            allService.setId(id);
            console.log("inside fashion onclick");

            $state.go('fashionProduct');
        }
          
         



    })
    .filter('selectedTags1', function() {
        return function(fashionData, brand) {

            return fashionData.filter(function(fashionData) {
                if (brand[0] || brand[1] || brand[2]||brand[3]||brand[4]) {
                    for (var i in fashionData) {
                        if (brand.indexOf(fashionData.brand) != -1) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    return true;

                }

            });
        };
    })




























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

//     myApp.filter('unique', function() {

//         return function(items, filterOn) {

//             if (filterOn === false) {
//                 return items;
//             }

//             if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
//                 var hashCheck = {},
//                     newItems = [];

//                 var extractValueToCompare = function(item) {
//                     if (angular.isObject(item) && angular.isString(filterOn)) {
//                         return item[filterOn];
//                     } else {
//                         return item;
//                     }
//                 };

//                 angular.forEach(items, function(item) {
//                     var valueToCheck, isDuplicate = false;

//                     for (var i = 0; i < newItems.length; i++) {
//                         if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
//                             isDuplicate = true;
//                             break;
//                         }
//                     }
//                     if (!isDuplicate) {
//                         newItems.push(item);
//                     }

//                 });
//                 items = newItems;
//             }
//             return items;
//         };
//     });


//     // $scope.fashionData;
//     //  $scope.selectedBrands = ['biba','Vero Moda'];
//     allService.getClothes()

//         .then(
//             function(result) {
//                 var brands = {};
//                 var text = [];
//                 // $scope.data = result;
//                 $scope.fashionData = result;
//                 // $scope.fashionData = $scope.data;
//                 for (var i = 0; i < result.length; i++) {
//                     if (!brands[result[i].brand]) {
//                         brands[result[i].brand] = true;
//                         text.push(result[i].brand);
//                     }


//                 }
//                 for (var i = 0; i < text.length; i++) {
//                     console.log(text[i]);
//                     $scope.textBox = text;

//                 }

//             },
//             function(error) {
//                 console.log(error.statusText);
//             });
//     // var arr = [];

//     $scope.search={'Biba':true,'Vero Moda':true,'Tommy Hilfiger':true,'Louis Philippe':true,'Peter England':true};


//     // $scope.searchItem =function(){
//     //   $scope.search;
//     //   console.log($scope.search);
//     //      $scope.fashionData;
//     //      $scope.data;
//     // }
//     // $scope.searchItem.push($scope.search);
//     $scope.searchBy = function() {
//         return function(fashion) {
//             console.log(fashion);

//             // var count = 0;
//             if ($scope.search[fashion.brand] === true) {
//                 console.log("a");
//                 return true;
//             } else {
//                 console.log('fhsdjhs');
//                 // count++;
//                 // arr.push(fashion);

//             }

//         }
//     };







// })
// .filter('selectedBrand',function(){
//          return function(fashionData ,selectedBrands){
//              return fashionData.filter(function(fashion){
//                  angular.forEach(fashion ,function(value ,key){
//                      if(selectedBrands.indexOf(value) !==-1){
//                          return true;
//                      }
//                  })
//                  return false;
//              });
//          };
//  });