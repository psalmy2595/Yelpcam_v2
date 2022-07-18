//import packages and require
var express    = require("express"),
    app        = express(),
    mongoose   = require("mongoose"),
    campground = require("./models/campground"),
    seedDB     = require("./seeds");
    // comment = require("./models/comment");
    // user = require("./models/user");

seedDB();
//APP CONFIG    
const PORT = process.env.PORT || 7000;

//create db and connect mongodb to app
mongoose.connect('mongodb://localhost:27017/yelp_camp', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.urlencoded({ extended: true}));
//to be able to call dir without the file eextension
app.set("view engine", "ejs");



//Root route
app.get("/", function(req, res){
    res.render("landing");
});
//First or Index Route
app.get("/campgrounds", function(req, res){
    //get all campgrounds from the db 
    campground.find({}, function (err, allCampgrounds){  
        if(err){
            console.log(err);
        }else{
        //shows us all the campgorunds
        res.render("campgrounds",{campgrounds:allCampgrounds});

        }
    });
   
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image; 
    var description = req.body.description; 
    // get data from form to add to 
    var newCampground = {name: name, image: image, description: description}
    // Create a new campground and save to the DB
    campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
    //redirect to campgrounds page
    // res.redirect("/campgrounds"); 
    
});

app.get("/campgrounds/new", function(req, res){
res.render("new");

});
//..................................................
app.get("/campgrounds/:id", function(req, res){
   campground.findById(req.params.id, function(err, foundCampground){
    if(err){
        res.redirect("/campgrounds")
    } else{
        res.render("show", {camp: foundCampground});
    }
   })
   console.log("Welcome");
});

app.listen(PORT, function(){
    console.log("Yelpcamp By Psalmyjay, SERVER STARTED");
});

function newFunction() {
    app.use(express.urlencoded({ extended: true }));
}
 