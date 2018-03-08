var mongoose = require('mongoose');
var db = mongoose.connection;
 mongoose.connect('mongodb://localhost/books', function(err) {
     if (err) throw err;
     else {
         console.log("success");
     }

 });
module.exports = db;






  