var mongoose = require("mongoose");

//Schema set up..
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});


//compile campground into a model
 module.exports = mongoose.model("Campground", campgroundSchema);