/*This file contains the code for schema of the entire json file*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema(

    // {

    //     // 

    //     title: { type: String, required: true },
    //     author: { type: String, required: true },
    //     isbn: { type: String, required: true },
    //     pages: { type: Number },
    //     summary: { type: String }



    // }


    {
        id: String,
        name: String,
        brand: String,
        price: Number,
        image: [],
        features: {
            riderHeight: String,
            idealFor: String,
            frameMaterial: String,
            brakeType: String,
            gear: String,
            tireSize: Number,
            frameSize: Number
        },
        desc: String,
        reviews: [{
                title: String,
                comment: String,
            }



        ]
    }




);


var Sports = mongoose.model('sports', dataSchema);
//'product' is the collection name  in books database
//product is any variable name for exporting - essentially a constructor
//dataSchema is the schema for various objects in data table
module.exports = Sports; // will be used by servicess