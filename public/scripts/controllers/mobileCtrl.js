myApp.controller('mobileCtrl', function($scope, $q, allService, $state) {

        $scope.brandfilter = [];
        var brand = ["apple", "samsung", "htc"];
        $scope.brands = brand;
        $scope.slider = {
            min: 0,
            max: 68000,
            options: {
                floor: 0,
                ceil: 68000,
            },
        }

        allService.getMobiles()


            .then(
                function(result) {

                    $scope.mobileData = result.result;
                },

                function(error) {
                    console.log(error.statusText);
                });



        $scope.filterFn = function() {
            return function(item) {
                return ((item['price'] >= $scope.slider.min) && (item['price'] <= $scope.slider.max));
            }
        };



        $scope.setId = function(id) {
            allService.setId(id);
            console.log("inside mobile onclick");

            $state.go('mobileProduct',{'id' : id});
        }




    })

    .filter('selectedTags2', function() {
        return function(mobileData, brand) {

            return mobileData.filter(function(mobileData) {
                if (brand[0] || brand[1] || brand[2]) {
                    for (var i in mobileData) {
                        if (brand.indexOf(mobileData.brand) != -1) {
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




























//     allService.getMobiles().then(function(result) {
//             var brands = {};
//             var text = [];
//             $scope.mobileData = result;
//             for (var i = 0; i < result.length; i++) {
//                 if (!brands[result[i].brand]) {
//                     brands[result[i].brand] = true;
//                     text.push(result[i].brand);
//                 }


//             }
//             for (var i = 0; i < text.length; i++) {
//                 console.log(text[i]);
//                 $scope.textBox = text;

//             }

//             $scope.search = [];
//          var tmp = [];
//             $("input[name='checkbox']").change(function() {
//                 var checked = $(this).val();
//                 if ($(this).is(':checked')) {
//                     tmp.push(checked);
//                     console.log('checked',tmp)
//                 } else {
//                     tmp.splice($.inArray(checked, tmp), 1);
//                 }
//             });

//             $('#button').on('click', function() {
//                 alert(tmp);
//                 var l = tmp.length;
//                 var mobileList = [];
//                 for (var i = 0; i < result.length; i++) {

//                     switch (l) {

//                         case 0:
//                             mobileList = $scope.mobileData;
//                             break;
//                         case 1:
//                          console.log("1",tmp[0]);
//                             if ($scope.mobileData[i].brand === tmp[0]) {
//                              console.log("Matched",$scope.mobileData[i].brand);
//                                 mobileList.push($scope.mobileData[i]);
//                             }
//                             break;

//                         case 2:
//                          console.log("2",tmp[1]);
//                             if ($scope.mobileData[i].brand === tmp[0] || $scope.mobileData[i].brand === tmp[1]) {

//                                 mobileList.push($scope.mobileData[i]);
//                             }
//                             break;

//                         case 3:
//                          console.log("3",tmp[2]);
//                             if ($scope.mobileData[i].brand === tmp[0] || $scope.mobileData[i].brand === tmp[1] || $scope.mobileData[i].brand === tmp[2]) {

//                                 mobileList.push($scope.mobileData[i]);
//                             }
//                             break;

//                         default:

//                             mobileList.push($scope.mobileData);
//                     }



//                 }
//                 console.log("Mobile list->",mobileList);
//                 $scope.mobileData = mobileList;
//                 console.log("Updated mobiledata",$scope.mobileData);
//                 $scope.$apply();



//             });
//             // });

//             // $scope.mobileData = result;
//             // console.log($scope.mobileData);

//             // var uniqueArray = result.filter(function(elem, index, array) {
//             //     return result.indexOf(result.brand) === 'samsung';


//             // $scope.fashionData = $scope.data;
//             //     for (var i = 0; i < result.length; i++) {
//             //         if (!brands[result[i].brand]) {
//             //             brands[result[i].brand] = true;
//             //             text.push(result[i].brand);
//             //         }


//             //     }
//             //     for (var i = 0; i < text.length; i++) {
//             //         console.log(text[i]);
//             //         $scope.textBox = text;

//             //     }

//         },
//         function(error) {
//             console.log(error.statusText);


//         });


// });