var mongoose = require("mongoose");
// app config
mongoose.connect("mongodb://localhost:27017/embeddeddata", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

var post = require("./models/post");
var user = require("./models/user");

// user having email and name 






post.create({

    title: "create burger pt2 mcdonalds ",
    content: " bugughihfisakvkfnsfnknfsfnsalkflksalak                  akkk",


}, function(err, post) {


    user.findOne({ email: "luffy@gmail.com" }, function(err, founduser) {
        if (err) {
            console.log(err);
        } else {

            founduser.posts.push(post);
            founduser.save(function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });

        }
    });
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// user.create({
//     name: "luffy",
//     email: "luffy@gmail.com",

// })




// var newuser = new user({
//     name: "dheeraj",
//     email: "dheerajc@gmail.com",
//     posts: [{

//         title: "gamer review",
//         content: "welcome  gamer",
//     }]

// });


// newuser.save(function(err, blog) {

//     if (err) {
//         console.log(err);
//     } else {
//         console.log(blog);
//     }

// });





// var newpost = new post({
//     title: "welcome to new String ",
//     content: "helllo getting started with embede data and data association  "
// })


// user.findOne({ name: "dheeraj" }, function(err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//         user.posts.push({
//             title: "3 thing i really are",
//             content: "gamer, coder , changer",
//         });

//         user.save(function(err, user) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(user);
//             }
//         });
//     }

// });