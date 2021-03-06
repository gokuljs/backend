var mongoose = require("mongoose");


var userSchema = new mongoose.Schema({
    name: String,
    email: String, // inthe user schema there is an post attribute 
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }],
});

module.exports = mongoose.model("user", userSchema);