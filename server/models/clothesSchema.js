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
        gender: String,
        brand: String,
        price: Number,
        features: {
            color: { type: String },
            fabric: { type: String },
            type: { type: String },
            pattern: { type: String }
        },
        image: [],
        reviews: [{
            title: String,
            comment: String
        }]


    }




);


var Clothes = mongoose.model('clothes', dataSchema);
//'product' is the table name  in webstore database
//product is any variable name for exporting - essentially a constructor
//dataSchema is the schema for various objects in data table
module.exports = Clothes; // will be used by servicess