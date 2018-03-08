// var obj=require('./model/mongoose.js');
var db = require('../config');
var Q = require('q');
var Mobile = require('../models/mobileSchema');


exports.setMobile = function(allData) {
    //     console.log(allData);
    //     var defer = Q.defer();
    //     // var book = new Mobile({
    //     //     title: req.body.title,
    //     //     author: req.body.author,
    //     //     isbn: req.body.isbn,
    //     //     pages: req.body.pages,
    //     //     summary: req.body.summary

    //     // })
    //     Mobile.collection.insert(allData, function(err, data) {
    //         defer.resolve(data);
    //         // })
    //     });

    //     return defer.promise; // return to controller
    // }


    var defer = Q.defer();
    Mobile.insertMany(allData, function(err, data) {
        if (err) {
            defer.reject('Error in saving data');
        } else {
            defer.resolve(data);
        }
    });
    return defer.promise;

}

exports.getOneMobile = function(id) {
    console.log(id);

     var response = {
        err: null,
        result: null
    };

    var defer = Q.defer();
    Mobile.findOne({id:id}, function(err, data) {
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
    // var defer = Q.defer();

    // if (!id) {


    //     return res.status(400).send({});
    // } else {


    //     Mobile.collection.findOne({ id: id }, function(err, data) {

    //         defer.resolve(data);

    //     });


    // }
    // return defer.promise;





exports.getMobiles = function(req) {


     var response = {
        err: null,
        result: null
    };

    var defer = Q.defer();
    Mobile.find({}, function(err, data) {
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
    // console.log("Inside get all mobiles");
    // var defer = Q.defer();
    // var result = [];

    // Mobile.find({}, function(err, data) {
    //     if (err) {
    //         console.log("error!!");

    //         return res.status(500).send({});
    //     } else {

    //         console.log("In else of getClothes");
    //         //need promise
    //         // console.log(data);
    //         //data.each(function(err, item) {
    //         //  console.log("ITEM:",item);
    //         //result.push(item);

    //         //  })

    //         // console.log(data);

    //     }
    //     defer.resolve(data);
    //     //  console.log('DATA IS:', data);
    //     // console.log('array of objects:', result);

    // });


    // return defer.promise;
exports.removeMobile = function(id) {
    console.log(id);

     var response = {
        err: null,
        result: null
    };

    var defer = Q.defer();
    Mobile.remove({id:id}, function(err, data) {
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


exports.updateMobile = function(data) {
    console.log("update mobile id:",id);

     var response = {
        err: null,
        result: null
    };

    var defer = Q.defer();
    Mobile.findByIdAndUpdate({id:data.id}, function(err, data) {
        if (err) {
            console.log("error inside updateMobile:",err);
            response.err = err;
        } else {
            console.log("data inside updateMobile:",data);
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