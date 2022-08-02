var mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment");

    //array of Objects
    var data = [
        {
            name: "Cloud's Rest", 
            image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
            name: "Cloud's Rest", 
            image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
            name: "Canyon Floor", 
            image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
    ]

    function seedDB() {
            //Delete All Campgrounds
            Campground.deleteMany({}, function(err){
                if (err){
                    console.log(err)
                }
                console.log("all campgrounds deleted")
                    //add a few campgrounds
                    data.forEach(function(seed){
                        Campground.create(seed, function(err, campground){
                            if(err){
                                console.log(err)
                            } else {
                                console.log("added a campground");
                                //each time i reload my server delete all from database then 
                                Comment.deleteMany({}, function(err){
                                    if (err){
                                        console.log(err)
                                    }else{
                                        //create and save to db 
                                        Comment.create({
                                            text: "This is a new comment/text",
                                            author: "Jay"
                                        }, function(err, comment){
                                            if (err){
                                                console.log(err);
                                            }else{
        
                                            }
                                            campground.comments.push(comment);
                                            campground.save();
                                            console.log('created a new comment')
                                        }); 
                                    }
                                })
                                // //create a comment on each camoground
                                // Comment.create({
                                //     text: "This is a new comment/text",
                                //     author: "Jay"
                                // }, function(err, comment){
                                //     if (err){
                                //         console.log(err);
                                //     }else{

                                //     }
                                //     campground.comments.push(comment);
                                //     campground.save();
                                //     console.log('created a new comment')
                                // });
                            }
                        });
                }); 
                
            });  
        
    };

module.exports = seedDB;