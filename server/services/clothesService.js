// var obj=require('./model/mongoose.js');
var db = require('../config');
var Q = require('q');
var Clothes = require('../models/clothesSchema');
//fetchdata is a service invoked by a controller 
// exports.fetchData=function(req,res){
//  var defer = Q.defer();
//  obj.findOne({},function(err,data){
//      defer.resolve(data);
//  })

//      return defer.promise;
// }
exports.setClothes = function(allData) {
    // console.log(allData);
    // var defer = Q.defer();
    // // var book = new Mobile({
    // //     title: req.body.title,
    // //     author: req.body.author,
    // //     isbn: req.body.isbn,
    // //     pages: req.body.pages,
    // //     summary: req.body.summary

    // // })
    // Clothes.collection.insert(allData, function(err, data) {
    //     defer.resolve(data);
    //     // })
    // });

    // return defer.promise; // return to controller

    var defer = Q.defer();
    Clothes.insertMany(allData, function(err, data1) {
        console.log("ALLDATA:", allData);
        console.log("DATA in service", data1);

        if (err) {
            defer.reject('Error in saving data');
        } else {
            defer.resolve(data1);
        }
    });
    return defer.promise;



}

exports.getOneClothes = function(id) {
    console.log(id);
    var defer = Q.defer();

    if (!id) {


        return res.status(400).send({});
    } else {


        Clothes.collection.findOne({ id: id }, function(err, data) {

            defer.resolve(data);

        });


    }
    return defer.promise;
}

// get all clothes

exports.getClothes = function(req) {

    // var response = {
    //     err: null,
    //     result: null
    // };

    // var defer = Q.defer();
    // Clothes.find({}, function(err, data) {
    //     if (err) {
    //         response.err = err;
    //     } else {
    //         response.result = data;
    //     }
    //     defer.resolve(response);
    //     // if (err) {
    //     //     defer.reject('Error in fetching data');
    //     // } else {
    //     //     defer.resolve(data);
    //     // }
    // });

    // return defer.promise;




    var response = {
        err: null,
        result: null
    };

    var defer = Q.defer();
    Clothes.find({}, function(err, data) {
        if (err) {
            response.err = err;
        } else {
            response.result = data;
        }
        defer.resolve(response);
        // if (err) {
        //     defer.reject('Error in fetching data');
        // } else {
        //     defer.resolve(data);
        // }
    });

    return defer.promise;

}




exports.updateClothes = function(req) {

    console.log('Id of cloth to be updated', req.params.id);
    var defer = Q.defer();

    if (!req.params.id) {


        return res.status(400).send({});
    }


    Clothes.findById(req.params.id, function(err, data) {
        if (req.body.name) {

            data.name = req.body.name;
        }
        if (req.body.gender) {

            data.gender = req.body.gender;
        }
        if (req.body.brand) {

            data.brand = req.body.brand;
        }
        if (req.body.price) {

            data.price = req.body.price;
        }


        // if (req.body.features.color) {

        //     data.features.color = req.body.features.color;
        // }
        // if (req.body.features.fabric) {

        //     data.features.fabric = req.body.features.fabric;
        // }
        // if (req.body.features.type) {

        //     data.features.type = req.body.features.type;
        // }
        // if (req.body.features.pattern) {

        //    data.features.pattern = req.body.features.pattern;
        // }
        if (req.body.image) {

            data.image = req.body.image;
        }
        // if (req.body.reviews.title) {

        //    data.reviews.title = req.body.reviews.title;
        // }
        // if (req.body.reviews.comment) {

        //    data.reviews.comment = req.body.reviews.comment;
        // }


        Clothes.collection.save(function(err, data) {

            defer.resolve(data);
            // })
        });

    })


    return defer.promise;


}


exports.deleteOne = function(req) {
    var defer = Q.defer();
    if (!req.params.id) {
        // return here??
        return res.status(400).send({});

    }
    Clothes.remove({ id: req.params.id }, function(err, data) {
        if (err) {
            res.send(err);
        } else {

            console.log("Deleted data :", data);
        }
        defer.resolve(data);
        // res.json({ message: 'Successfully deleted' });
    });

    return defer.promise;

};


exports.saveMobileData = function(allData) {

    var defer = Q.defer();
    mobile.insertMany(allData, function(err, data) {
        if (err) {
            defer.reject('Error in saving data');
        } else {
            defer.resolve(data);
        }
    });
    return defer.promise;
}