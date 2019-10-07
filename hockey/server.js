const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3003;
const app = express();
const routes = require("./routes")
const db = require("./models");
const mysql = require("mysql2");
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Cellyhard10!",
//   database: "players"
// });

// connection.connect(function (err) {
//   if (err) throw err;
// });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.use(routes)

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});



// db.sequelize.sync({force: true}).then(function () {
//   app.listen(PORT, function () {
//     console.log(`🌎 ==> API server now on port ${PORT}!`);
//   });
// });

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
