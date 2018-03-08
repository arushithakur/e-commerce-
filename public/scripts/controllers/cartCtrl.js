myApp.controller('cartCtrl', function($scope, $q, allService, $state, $location) {

    var products = [];
    $scope.quantity = 1;
    $scope.products = allService.getCart();
    console.log("cart cntrl values:", $scope.products);

    // allService.getAllData()
    //     .then(function(result) {

    //             $scope.allData = result;

    //         },
    //         function(error) {

    //             console.log(error.statusText);

    //         }
    //     )

    // $scope.removeCart = function(product, index) {
    //     alert("Index of row :" + index);
    //     var cartItems = allService.getCart();

    //     console.log("Cart content:", cartItems);

    //     for (var i = 0; i < cartItems.length; i++) {

    //         if (cartItems[i].id == product.id) {

    //             cartItems.splice(i, 1);
    //             break;

    //         }
    //     }
    //     //localStorage.setItem('cart',JSON.stringify(cartItems));
    //     localStorage["cart"] = JSON.stringify(cartItems);

    //     // allService.setCart(cartItems[i]);





    //     console.log(cartItems);
    //     console.log("product removed id:", product.id);
    //     $scope.products = allService.getCart();

    //     // $state.go('cart');


    // }
var cartItems = allService.getCart();

    $scope.removeCart = function(id, index) {
         console.log("product to be deleted:",id,index);
        
          // console.log("",id);

        for (var i = 0; i < cartItems.length; i++) {


            console.log(cartItems[0]);

            if (id == cartItems[i].id) {
                console.log(id,cartItems[i].id);

                delete cartItems[i];
               cartItems.splice(i,1);

                localStorage["cart"] = JSON.stringify(cartItems);
            }
        }

             $scope.products = allService.getCart();

    }


    // $scope.removeCart= function(index,id)
    // {

    // var cartItems = allService.getCart();
    //     delete cartItems[id]; 



    // }

    // $scope.total = function() {
    //     var total = 0;
    //     angular.forEach($scope.products, function(item) {
    //         total += item.price * item.quantity ;
    //     })

    //     return total;
    // }

})