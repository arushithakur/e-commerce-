var sportsCtrl = require("../controllers/sportsCtrl");
module.exports = function(app) {

    // app.get('/', function(req, res) {
    //     //  console.log('get function');
    //     //  // for the actual project
    //     res.sendFile(staticPath + '/index.html');

    // });

    // app.post("/addSports", sportsCtrl.create); // Create

    app.post('/addSports', function(req, res) {
        sportsCtrl.create(req.body).then(function(resp) {
            res.send(resp);
        }).catch(function(err) {
            res.send(err);
        });
    });
    // app.get("/Mobile/:id",mobileCtrl.readOne); // Read One
    app.get('/getSports/:id', function(req, res) {
        sportsCtrl.readOne(req.params.id).then(function(resp) {
            console.log(resp); // on terminal
            res.send(req.params.id);// on postman
        });
    });
  
  //  app.get("/allSports", sportsCtrl.readAll); // Read All

    app.get('/allSports', function(req, res) {
        sportsCtrl.readAll().then(function(resp) {
            console.log(resp);
            res.send(resp);
        })
        // .catch(function(err){
        // res.send(err);
        // }) 
    });
    // app.put("/book/:id",booksCtrl.update); // Update
    // app.delete("/book/:id",booksCtrl.delete); // Delete

     app.post('/removeSports/:id', function(req, res) {
        sportsCtrl.delete(req.params.id).then(function(resp) {
           console.log(resp);
              res.send(req.params.id);
        }).catch(function(err) {
            res.send(err);
        })
    });
    // app.post('/addData', function(req,res){



    // })


}