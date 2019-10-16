require("dotenv").config();
const express = require("express");
const session = require("express-session")
const path = require("path");
const PORT = process.env.PORT || 3003;
const app = express();
const routes = require("./routes")
const db = require("./models");
const mysql = require("mysql2");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(session({
//   key:'user_sid',
// 	secret: 'secret',
// 	resave: false,
// 	saveUninitialized: false
// }));

// Send every request to the React app
// Define any API routes before this runs
app.use(routes)


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});



db.sequelize.sync({force: false}).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});


// app.listen(PORT, function () {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
