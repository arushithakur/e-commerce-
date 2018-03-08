var Clothes = require('../models/clothesSchema');
var service = require('../services/clothesService');
// exports.create = function(req, res){

//  var book= new Book({
//    title: req.body.title,
//    author: req.body.author ,
//   isbn: req.body.isbn ,
//   pages: req.body.pages ,
//   summary: req.body.summary 

//  }).save(function(err,book){ //save in db 

//      if(err){

//        res.status(500).res.send(err.message);
//      }
//      res.json(book); //show in browser

//  });
// };

exports.create = function(data) {
    console.log("data in cntrl:",data);
 return service.setClothes(data);
    // service.setClothes(req.body)

    //     .then(function(res, err) {

    //         if (err) {
    //             console.log('error is ', err);
    //             res.status(500)
    //                 .send(err.message);
    //         } else {
    //             console.log('returned cloth is', res);
    //             res.json(res); //show in postman
    //         }
    //     });
}
// Finds a single book in the db
exports.readOne = function(req, res) {

    service.getOneClothes(req.params.id).then(function(response, err) {

        if (err) {
            console.log('error is ', err);
            res.status(500)
                .send(err.message);
        } else {
            console.log('returned cloth is', response);
            res.json(response); //show in postman
        }
    });

};
// // Finds all books in the db
exports.readAll = function(req, res) {
    // Clothes.find(function(err, products) {
    //     if (err) return next(err);
    //     res.json(products);
    // });

   return service.getClothes();
        // .then(function(response, error) {

        //     if (error) {
        //         console.log('error is ', error);
        //         res.status(500)
        //             .send(error.message);
        //     } else {
        //         console.log('returned cloth is', response);
        //         res.json(response); //show in postman
        //     }
        // });
};
// // Updates a book from the db
exports.update = function(req, res) {

    service.updateClothes(req)

        .then(function(response, error) {

            if (err) {
                console.log('error is ', error);
                res.status(500)
                    .send(error.message);
            } else {
                console.log('returned cloth is', response);
                res.json(response); //show in postman
            }
        });

};
// // Deletes a book from the db
exports.delete = function(req, res) {

    service.deleteOne(req)



        .then(function(response, err) {

            if (err) {
                console.log('error is ', err);
                res.status(500)
                    .send(err.message);
            } else {
                console.log('returned cloth is', response);
                res.json(response); //show in postman
               // res.json({message:"successfully deleted "});
            }
        });


};




// var mobileServ = require('./mobileServ.js');


// exports.saveMobileData = function(data) {
//    return mobileServ.saveMobileData(data);
// }

// exports.getMobilesData = function() {
//    return mobileServ.fetchData();
// }

// exports.mobilesUpdate = function() {
//    return mobileServ.fetchData();
// }