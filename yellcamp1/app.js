var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var campground = require("./models/campground")
var comment = require("./models/comment");
var passport = require("passport");
var localStratergy = require("passport-local");
var user = require("./models/user");
var seeddb = require("./seeds")



// app config

seeddb();
mongoose.connect("mongodb://localhost:27017/yelpcamp", { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// dirname refers to the directory name to the script was running 
console.log(__dirname);


app.use(bodyParser.urlencoded({ extended: true }));


// passport configuration 
app.use(require("express-session")({
    secret: "i have msi laptop",
    resave: false,
    saveUninitialized: false,


}));
app.use(passport.initialize());
// So basically passport.initialize() initialises the authentication module.
// passport.session() is another middleware that alters the request object and change the 'user' value that is currently the session id (from the client cookie) into the true deserialized user object. It is explained in detail here.
app.use(passport.session());
passport.use(new localStratergy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// this method is for making current user work for all other webpages 


app.use(function(req, res, next) {
    res.locals.currentuser = req.user; //
    //what ever we put inside reslocals thats is available inside our templates 
    next();
    //next is require to run the next middle ware 

});




app.get("/", function(req, res) {
    res.render("landing")
});


app.get("/campgrounds", function(req, res) {

    // getting all the data from database 
    console.log(req.user);

    campground.find({}, function(err, campgrounds) {
        console.log(req.user);
        if (err) {
            console.log(err);
        } else {

            res.render("campgrounds/index", { campgrounds: campgrounds, currentuser: req.user });
            console.log("done");

        }
    })


    // the rendering the file 


})


app.post("/campgrounds", function(req, res) {

    // res.send("you hit the post route ");

    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    console.log(name);
    console.log(image);
    var newcampground = {
        name: name,
        image: image,
        desc: description,
    }
    campground.create(newcampground, function(err, campground) {

        if (err) {
            console.log(err);
        } else {
            // console.log(campground);
            console.log("got created");
            res.redirect("/campgrounds");
        }

    })

    // campgrounds.push(newcampground);

    // get data from form add to the campground array
    // redirect back to campgrounds page 


});


app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new");
});

// show page 
// it is the page that displays more information of one campground 

app.get("/campgrounds/:id", function(req, res) {

    // capture that id 
    // render the show page with that id
    console.log(req.params.id);
    campground.findById(req.params.id).populate("comments").exec(function(err, foundcampground) {

        if (err) {
            console.log(err);
        } else {
            console.log("foundcampground")
                // console.log(foundcampground);
            res.render("campgrounds/show", { campground: foundcampground });
        }

    });



})

// ============================================================
// comment routes
// ======================================================

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res) {
    console.log(req.params.id);
    campground.findById(req.params.id, function(err, foundcampgroud) {
        if (err) {
            console.log(err);
        } else {
            // console.log(foundcampground);
            // console.log(foundcampgroud);

            // res.send("hello");
            res.render("comments/new", { campground: foundcampgroud });
        }

    });


});


app.post("/campgrounds/:id/comments", function(req, res) {

    console.log(req.params.id);
    campground.findById(req.params.id, function(err, foundcampground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            // console.log(foundcampground);
            console.log(req.body.comment);
            comment.create(req.body.comment, function(err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    // console.log(comment);
                    foundcampground.comments.push(comment);
                    foundcampground.save();
                    console.log(foundcampground);
                    res.redirect("/campgrounds/" + foundcampground._id);
                }
            });


        }

    });
    // lookup campgrounds using id 
    // create new comment 
    // the push that campgrounds into campgrounds 
    //redirect back to campground show page 


})




// ======================================================================
// auth routes
// ===================================================================

// show the register form 
app.get("/register", function(req, res) {
    // res.send("welcome to register form ");
    res.render("register")
})

app.post("/register", function(req, res) {
    console.log("getting ur username and password");
    console.log(req.body.username);
    console.log(req.body.password);
    // res.send("you have reached post route");
    var newuser = new user({
        username: req.body.username,
    })
    user.register(newuser, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/campgrounds");
        })
    });
})


// login 
app.get("/login", function(req, res) {
    res.render("login");
});

//app,post("routes",middleware,callback)
app.post("/login", passport.authenticate('local', {
    successRedirect: "/campgrounds",
    failureRedirect: "/login",
}), function(req, res) {
    // res.send("reached login page");
    console.log("getting ur username and password");
    console.log(req.body.username);
    console.log(req.body.password);
    console.log("login")
});

//logout route 
app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});


// creating a middle ware to ccheck that user has logged in or not 
function isLoggedIn(req, res, next) {
    console.log("authentication starting")
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");

}


app.listen(3000, function() {
    console.log("server has started");

});