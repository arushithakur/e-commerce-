myApp.controller('mobileProductCtrl', function($scope, $q, allService,$state) {

    //$scope.id = allService.getId(); // client side (changed)

  //  console.log('got id', $scope.id); //client side (changed)

    allService.getOneMobile()
        .then(function(result) {

                console.log("in mobileProductCtrl getOneMobile result:" ,result);
                $scope.product = result.result; 
                //client side (changed)
               // $scope.mobileData = result;  
                // console.log($scope.mobileData);
                // for (var i = 0; i < $scope.mobileData.length; i++) {
                //     // console.log("inside for");
                //     if ($scope.mobileData[i].id == $scope.id) {

                //         $scope.product = $scope.mobileData[i];
                //         console.log('Product display:', $scope.product);
                //     }
                // }

            },

            function(error) {

                console.log(error.statusText);
            }

        )

     $scope.setCart = function(product) {

        var cartItems = allService.getCart();
        console.log(cartItems);


        var flag = 0, flagx=0;

        if (cartItems) {
            for (var i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id == product.id) {
                    flag = 1;
                    break;
                }

            }
        } else {
            flagx=1;
            allService.setCart(product);

        }

        if (flag == 0 && flagx ==0) {

            allService.setCart(product);
            console.log("added id to cart", product.id);
        }



        $state.go('cart');

    }

})