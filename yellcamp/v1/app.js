var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
    { name: "mountains", image: "https://lh3.googleusercontent.com/proxy/moNZl7sbmHTDLR4ox6WUmcyC--rNw-b7b5XJEQ9royBath4CV09JOjVMO5ghw-CPPrEDKg3tUPJQUlQZhOg50wtyCV6-k7zdRYF3dFrT9sexGMVuaWiYWc1PHoAAtj-XMHe9xpzodBrAf1YtB00-2ZMPasTlfG_aRg", },
    { name: "art", image: "https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },
    { name: "pattern", image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", },

];

app.get("/", function(req, res) {
    // res.send("landing page");
    res.render("landing")
});

app.get("/campgrounds", function(req, res) {

    res.render("campground", { campgrounds: campgrounds });
});


app.post("/campgrounds", function(req, res) {

    // get data from form and add it to array 

    var name = req.body.name;
    var image = req.body.image;
    console.log(name);
    console.log(image);
    var newcampground = {
            name: name,
            image: image,
        }
        // redirect back to campgrounds page 
        //res.send("you have enntered the post request part ");\
    campgrounds.push(newcampground);
    res.redirect("/campgrounds");




});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});








app.listen(3000, function() {
    console.log("yellcamp server has satrted ")
});