var Sports = require('../models/sportsSchema');
var service = require('../services/sportsService');
// exports.create = function(req, res){

//  var book= new Book({
//    title: req.body.title,
//    author: req.body.author ,
//   isbn: req.body.isbn ,
//   pages: req.body.pages ,
//   summary: req.body.summary 

//  }).save(function(err,book){ //save in db 

//      if(err){

//          res.status(500).res.send(err.message);
//      }
//      res.json(book); //show in browser

//  });
// };

exports.create = function(data) {
    console.log('Sports cntrl:', data);
    return service.setSports(data);
    // .then(function(res, err) {

    //     if (err) {
    //       console.log('error is ',err);
    //       res.status(500)
    //          .send(err.message);
    //     }else {
    //     console.log('returned sports is',res);
    //     res.json(res); //show in postman
    //     }
    // });
}
// Finds a single book in the db
 exports.readOne = function(id) {

    return service.getOneSports(id);
 };
// // Finds all books in the db
exports.readAll = function(req, res) {
    // Clothes.find(function(err, products) {
    //     if (err) return next(err);
    //     res.json(products);
    // });


    return service.getSports();

    // .then(function(response, error) {

    //     if (error) {
    //         console.log('error is ', error);
    //         res.status(500)
    //             .send(error.message);
    //     } else {
    //         console.log('returned sports is', response);
    //         res.json(response); //show in postman
    //     }
    // });
};
// // Updates a book from the db
// exports.update = function(req, res) {};
// // Deletes a book from the db
 exports.delete = function(id) {

return service.removeSports(id);

 };