var mongoose = require('mongoose');
var db = mongoose.connection;
 mongoose.connect('mongodb://localhost/books', function(err) {
     if (err){
console.log(err);
      throw err;	
     }
     else {
         console.log("success in connected to db");
     }

 });
module.exports = db;






  