var mongoose = require("mongoose");
var Campground = require("./models/campground");


function seedDB() {
    //Delete All Campgrounds
    Campground.deleteMany({}, function(err){
        if (err){
            consolle.log(err)
        } else{
            console.log("all campgrounds deleted")
        }
    }); 
}

module.exports = seedDB;