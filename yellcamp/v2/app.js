var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// exact same syntax should be used everytime to remove the depriciated  warning 
//27017 represents the port number in which the mongodb is working on 
mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));


//schema setup
var campgroundschema = new mongoose.Schema({
    name: String,
    img: String,
    desc: String,
});

var campground = mongoose.model("campground", campgroundschema);






app.get("/", function(req, res) {

    res.render("landing")
});

// displays all the campgrounds page 
app.get("/campgrounds", function(req, res) {
    //get all campgrounds from db and render that file

    campground.find({}, function(err, allcampgrounds) {
        if (err) {
            console.log(err);
        } else {

            res.render("index", { campgrounds: allcampgrounds })
        }

    });

});




app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    console.log(desc);
    var newcampground = {
        name: name,
        img: image,
        desc: desc,
    }
    campground.create(newcampground, function(err, newlycreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds")
        }
    });

});

// form page to add new campgrounds 

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});



app.get("/campgrounds/:id", function(req, res) {
    // res.send("this will be show page one day ")
    console.log(req.params.id);
    var id = req.params.id;
    // u pass id and ur function
    campground.findById(id, function(err, foundcampground) {

        if (err) {
            console.log(err);
        } else {
            console.log(foundcampground);
            res.render("show", { campground: foundcampground });
        }

    })

    // res.render("show")
});









app.listen(3000, function() {
    console.log("yellcamp server has started  ")
});