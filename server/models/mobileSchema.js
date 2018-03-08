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
        name:  String,
        brand: String,
        image: [],
        price:  Number,
        features: {
            screen: String,
            processor:  String ,
            os: String ,
            battery: String ,
            camera:String ,
            ram:  String ,
            rom:  String ,
            warranty:  String ,
            color: String 
        },
        desc:  String ,
        reviews: [{
            title:  String ,
            comment: String
        }]
    }




);


var Mobile = mongoose.model('mobiles', dataSchema);
//'product' is the table name  in webstore database
//product is any variable name for exporting - essentially a constructor
//dataSchema is the schema for various objects in data table
module.exports = Mobile;