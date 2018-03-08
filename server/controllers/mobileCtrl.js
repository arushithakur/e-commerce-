var Mobile = require('../models/mobileSchema');
var service = require('../services/mobileService');
// exports.create = function(req, res){

// 	var book= new Book({
//    title: req.body.title,
//    author: req.body.author ,
//   isbn: req.body.isbn ,
//   pages: req.body.pages ,
//   summary: req.body.summary 

// 	}).save(function(err,book){ //save in db 

//      if(err){

//      	res.status(500).res.send(err.message);
//      }
//      res.json(book); //show in browser

// 	});
// };

exports.create = function(data) {

    return service.setMobile(data);

        // .then(function(res, err) {

        //     if (err) {
        //         console.log('error is ', err);
        //         res.status(500)
        //             .send(err.message);
        //     } else {
        //         console.log('returned book is', book);
        //         res.json(res); //show in postman
        //     }
        // });
}
// Finds a single book in the db
exports.readOne = function(id) {
   console.log('inside readOne');
   return service.getOneMobile(id);
    // .then(function(response, err) {

    //     if (err) {
    //         console.log('error is ', err);
    //         res.status(500)
    //             .send(err.message);
    //     } else {
    //         console.log('returned mobile is', response);
    //         res.json(response); //show in postman
    //     }
    // });

};
// // Finds all books in the db

 exports.readAll = function(req, res) {
    // Clothes.find(function(err, products) {
    //     if (err) return next(err);
    //     res.json(products);
    // });

   return service.getMobiles();
        // .then(function(response, error) {

        //     if (error) {
        //         console.log('error is ', error);
        //         res.status(500)
        //             .send(error.message);
        //     } else {
        //         console.log('returned mobile is', response);
        //         res.json(response); //show in postman
        //     }
        // });
};
// // Updates a book from the db
exports.update = function(body) {

    return service.updateMobile(bodyy);
};
// // Deletes a book from the db
 exports.delete = function(id) {
 console.log('inside delete id:',id);

  return  service.removeMobile(id);
 };