var mobileCtrl = require("../controllers/mobileCtrl");
module.exports = function(app) {

    app.get('/', function(req, res) {
        //  console.log('get function');
        //  // for the actual project
        res.sendFile(staticPath + '/index.html');

    });

    // app.post("/addMobile", mobileCtrl.create); // Create
    app.post('/addMobile', function(req, res) {
        mobileCtrl.create(req.body).then(function(resp) {
            res.send(resp);
        }).catch(function(err) {
            res.send(err);
        })
    });
    //  app.get("/Mobile/:id", mobileCtrl.readOne); // Read One
    app.get('/getMobile/:id', function(req, res) {
        mobileCtrl.readOne(req.params.id).then(function(resp) {
            console.log(resp); // on terminal
            res.send(resp);// on postman
        });
    });

//app.get("/allMobiles", mobileCtrl.readAll); // Read All

app.get('/allMobiles', function(req, res) {
    mobileCtrl.readAll().then(function(resp) {
        console.log(resp);
        res.send(resp);
    })
    // .catch(function(err){
    // res.send(err);
    // }) 
});

// Update
 app.post("/updateMobile/:id", function(req, res) {
        mobileCtrl.update(req.body).then(function(resp) {
           console.log(resp);
              res.send(req.body);
        }).catch(function(err) {
            res.send(err);
        })
    }); 
//app.delete("/removeMobile/:id",booksCtrl.delete); // Delete
  app.post('/removeMobile/:id', function(req, res) {
        mobileCtrl.delete(req.params.id).then(function(resp) {
           console.log(resp);
              res.send(req.params.id);
        }).catch(function(err) {
            res.send(err);
        })
    });

// app.post('/addData', function(req,res){



// })


};