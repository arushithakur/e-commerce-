myApp.controller('sportsCtrl', function($scope, $q, allService, $state) {

        $scope.brandfilter = [];
        var brand = ["Hero", "Nike", "Wilson"];
        $scope.brands = brand;
        $scope.slider = {
            min: 0,
            max: 3700,
            options: {
                floor: 0,
                ceil: 3700,
            },
        }

        allService.getSport().
        then(function(result) {

                $scope.sportsData = result.result;

            },

            function(error) {

                console.log(error.statusText);
            }
        )

        $scope.filterFn = function() {
            return function(item) {
                return ((item['price'] >= $scope.slider.min) && (item['price'] <= $scope.slider.max));
            }
        };


        $scope.setId = function(id) {
            allService.setId(id);
            console.log("inside sports onclick");

            $state.go('sportsProduct');
        }


    })
    .filter('selectedTags3', function() {
        return function(sportsData, brand) {

            return sportsData.filter(function(sportsData) {
                if (brand[0] || brand[1] || brand[2]) {
                    for (var i in sportsData) {
                        if (brand.indexOf(sportsData.brand) != -1) {
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




// filter('custfilter', function() {
//        return function(sport, game) {
//            return sport.filter(function(sport) {
//                if (game[0] || game[1] || game[2]) {
//                    for (var i in sport) {
//                        if (game.indexOf(sport.sport) != -1) {
//                            return true;
//                        }
//                    }
//                    return false;
//                } else {
//                    return true;
//                }

//            });
//        };
//    })
// Kamaldeep • Now