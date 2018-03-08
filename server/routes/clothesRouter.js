var clothesCtrl = require("../controllers/clothesCtrl");
module.exports = function(app) {

    //  app.get('/',function(req,res){
    // //   console.log('get function');
    // //   // for the actual project
    //  res.sendFile(staticPath+'/index.html');

    //  });

    //app.post("/addClothes",clothesCtrl.create); // Create

    app.post('/addClothes', function(req, res) {
        clothesCtrl.create(req.body).then(function(resp) {
            res.send(resp);
        }).catch(function(err) {
            res.send(err);
        })
    });

    app.get("/Clothes/:id", clothesCtrl.readOne); // Read One
    //  app.get("/allClothes", clothesCtrl.readAll); // Read All
    app.get('/allClothes', function(req, res) {
        clothesCtrl.readAll().then(function(resp) {
            console.log(resp);
            res.send(resp);
        })
        // .catch(function(err){
        // res.send(err);
        // }) 
    });

    app.post("/updateClothes/:id", clothesCtrl.update); // Update
    app.post("/deleteClothes/:id", clothesCtrl.delete); // Delete


    // app.post('/addData', function(req,res){



    // })


};

// var mobileCtrl = require('./mobilecontroller.js');


// module.exports = function(app) {


//    app.post('/saveMobileData', function(req, res) {
//        mobileCtrl.saveMobileData(req.body).then(function(resp) {
//            res.send(resp);
//        }).catch(function(err) {
//            res.send(err);
//        })
//    });


//    app.get('/mobiles', function(req, res) {
//        mobileCtrl.getMobilesData().then(function(resp) {
//            console.log(resp);
//            res.send(resp);
//        })
//        // .catch(function(err){
//        // res.send(err);
//        // }) 
//    });

//    // app.get('/mobilesUpdate', function(req, res) {
//    // mobileCtrl.getMobilesData(req.query.id).then(function(resp) {
//    //         console.log(resp);
//    //         res.send(req.query.id);
//    //     });
//    // });
// }