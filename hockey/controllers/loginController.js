var db = require("../models");

module.exports ={

//   // middleware function to check for logged-in users ~~if user is logged in will take to dashboard
//   var sessionChecker = (req, res, next) => {
//     if (req.session.user && req.cookies.user_sid) {
//       res.redirect("/dashboard");
//     } else {
//       next();
//     }
//   };

//   var hbsContent = { user: '', loggedin: false, title: "You are now logged in today", body: "Hello World" };


//   // Route for home page (Login page)
//   app.get("/", sessionChecker, function (req, res) {
//     res.render("index", {
//       title: "Login Form"
//     })
//   });

 //route for registration page
//  app.route("/registration")
//    .get((req, res) => {
//      res.render("registration", {
//        title: "Registration Form"
//      })
//    })
//    .post((req, res) => {
//      db.User.create({
//        firstName: req.body.firstName,
//        lastName: req.body.lastName,
//        password: req.body.password,
//        email: req.body.email
//      })
//        .then(console.log("Success!"))
//        .catch(error => {
//          res.redirect('/registration');
//        });
//    })

//   // route for user login 
//   app.route("/index")
//     .get(sessionChecker, (req, res) => {
//       res.render("index", {
//         title: "Login Form"
//       })
//     })
//     .post((req, res) => {
//       var user = req.body.user;
//       var password = req.body.password;
//       //searches database for user & password authentication 
//       db.User.findOne({ where: { user: user } })
//         .then(function (user) {
//           if (!user) {
//             console.log("not a valid user")
//             res.redirect('/index');
//           } else if (!user.validPassword(password)) {
//             console.log(`user found but wrong password(${password})`)
//             res.redirect('/index');
//           } else {
//             req.session.user = user.dataValues;
//             res.redirect('/dashboard');
//           }
//         });
//     });



//   // route for user's dashboard
//   app.get('/dashboard', (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
//       hbsContent.loggedin = true;
//       hbsContent.user = req.session.user.user;
//       console.log(req.session.user.user);
//       res.render('dashboard', hbsContent);
//     } else {
//       res.redirect('/index');
//     }
//   });

//   //route for logout button
//   app.get('/logout', (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
//       hbsContent.loggedin = false;
//       hbsContent.title = "You are logged out!";
//       res.clearCookie('user_sid');
//       console.log(JSON.stringify(hbsContent));
//       res.redirect('/');
//     } else {
//       res.redirect('/index');
//     }
//   });

//   //Render 404 page for any unmatched routes
//   app.get("*", function (req, res) {
//     res.render("404");
//   });

create: function(req, res) {
    console.log(req.body)
    db.User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
      })
        .then(function(test){
            res.json(test);
        })
        .catch(error => {
          res.redirect('/registration');
        });
  },


};