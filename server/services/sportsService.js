// var obj=require('./model/mongoose.js');
var db = require('../config');
var Q = require('q');
var Sports = require('../models/sportsSchema');
//fetchdata is a service invoked by a controller 
// exports.fetchData=function(req,res){
//  var defer = Q.defer();
//  obj.findOne({},function(err,data){
//      defer.resolve(data);
//  })

//      return defer.promise;
// }
exports.setSports = function(allData) {
    // console.log(allData);
    // var defer = Q.defer();
    // // var book = new Mobile({
    // //     title: req.body.title,
    // //     author: req.body.author,
    // //     isbn: req.body.isbn,
    // //     pages: req.body.pages,
    // //     summary: req.body.summary

    // // })
    // Sports.collection.insert(allData, function(err, data) {
    //     defer.resolve(data);
    //     // })
    // });

    // return defer.promise; // return to controller


    var defer = Q.defer();
    Sports.insertMany(allData, function(err, data) {
        if (err) {
            defer.reject('Error in saving data');
        } else {
            defer.resolve(data);
        }
    });
    return defer.promise;
}


exports.getSports = function(req) {


    var response = {
        err: null,
        result: null
    };

    var defer = Q.defer();
    Sports.find({}, function(err, data) {
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

// console.log("Inside get all sports");
// var defer = Q.defer();
// var result = [];

// Sports.find({}, function(err, data) {
//     if (err) {
//         console.log("error!!");

//         return res.status(500).send({});
//     } else {

//         console.log("In else of getSports");
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

exports.getOneSports = function(id) {
    console.log(id);

     var response = {
        err: null,
        result: null
    };

    var defer = Q.defer();
    Sports.findOne({id:id}, function(err, data) {
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

exports.removeSports = function(id) {
    console.log(id);

     var response = {
        err: null,
        result: null
    };

    var defer = Q.defer();
    Sports.remove({id:id}, function(err, data) {
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