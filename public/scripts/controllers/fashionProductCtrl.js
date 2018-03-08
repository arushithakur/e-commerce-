myApp.controller('fashionProductCtrl', function($scope, $q, allService, $state) {

    $scope.id = allService.getId();

    console.log('got id', $scope.id);

    allService.getClothes()
        .then(function(result) {


                $scope.fashionData = result;
                // console.log($scope.fashionData);
                for (var i = 0; i < $scope.fashionData.length; i++) {
                    // console.log("inside for");
                    if ($scope.fashionData[i].id == $scope.id) {

                        $scope.product = $scope.fashionData[i];
                        console.log('Product display:', $scope.product);
                    }
                }

            },

            function(error) {

                console.log(error.statusText);
            }

        )


    $scope.setCart = function(product) {

        var cartItems = allService.getCart();
        console.log(cartItems);


        var flag = 0;

        if (cartItems) {
            for (var i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id == product.id) {
                    flag = 1;
                }

            }
        } else {

            allService.setCart(product);

        }

        if (flag == 0) {

            allService.setCart(product);
            console.log("added id to cart", product.id);
        }



        $state.go('cart');

    }


})