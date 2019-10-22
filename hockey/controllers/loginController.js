var db = require("../models");



module.exports = {

  create: function (req, res) {
    console.log(req.body)
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
    .then(user => {
      req.session.user = user.dataValues;
      res.redirect('/home');
    })
      .catch(error => {
        console.log('Failed :(')
        res.redirect('/');
      });
  },

  load: function (req, res) {
    res.json({notSignedIn: true});
  },

  login: function (req, res) {
    var user = req.body.user;
    var password = req.body.password;
    //searches database for user & password authentication 
    db.User.findOne({ where: { email: user } })
      .then(function (user) {
        if (!user) {
          console.log("not a valid user")
          res.redirect('/');
        } else if (!user.validPassword(password)) {
          console.log(`user found but wrong password(${password})`)
          res.redirect('/');
        } else {
          
          req.session.user = user.dataValues;
          res.redirect('/home');
        }
      });
  },

  logout: function (req, res) {
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.json({signedOut: true})
    }
  }
};