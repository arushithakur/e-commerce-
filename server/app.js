var express= require('express');
var app= express();
//var router= require('./routes/router.js');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');
var port= process.env.PORT || 4000;
var db = require('./config');
var mobile= require('./models/mobileSchema');
//exported Book
var mobileCtrl = require("./controllers/mobileCtrl");


//middleware - shall search in the public dir whenever /assets get request occurs
// app.use('/assets',express.static(__dirname+'/public'));
var staticPath = path.join(__dirname,'../public');

 app.use(express.static(staticPath));

 app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride());

// app.use('/',function(req,res,next){
// 	console.log('Request url:',req.url);
// 	next();
// })
//app.use(express.static(__dirname+'../public'));

//hhtp get requests
// app.get('/',function(req,res){
      
//     res.send('server is running');
   
// });

// app.get('/api',function(req,res){


// 	res.json({firstname:'hello', surname:'world'});
// });

// app.get('/customer/:id',function(req,res){

//          res.send('<html><head></head><body><h1>Customer:'+ req.params.id +'</h1></body></html>')

// });

// app.post("/book",booksCtrl.create); // Create
// app.get("/book/:id",booksCtrl.readOne); // Read One
// app.get("/book/",booksCtrl.readAll); // Read All
// app.put("/book/:id",booksCtrl.update); // Update
// app.delete("/book/:id",booksCtrl.delete); // Delete

app.listen(port, function(){

console.log('Listening on port',port);
});

// app.use('/',router)

// app.get('/',function(req,res){
// 	console.log('get funciton');
// 	res.sendFile(staticPath+'/index.html');

// });

require('./routes/index.js')(app);

