var mongoose  = require("mongoose");

//commentSchema
var commentSchema = mongoose.Schema({
    text: String,
    author: String
});





module.exports  = mongoose.model("Comment", commentSchema);