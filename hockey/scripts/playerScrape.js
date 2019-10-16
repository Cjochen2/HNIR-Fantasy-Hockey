// module.exports = function scape() {
  


// var mysql = require("mysql");
// var cheerio = require("cheerio");
// var axios = require("axios");
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "players"
// });

// connection.connect(function (err) {
//   if (err) throw err;
// });
// var express = require("express");


// var app = express();
// var PORT = process.env.PORT || 8080;
// var db = require("./models");


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// db.sequelize.sync({force: true}).then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// });



      db.Stat.create(player).then((err, res) => {
        console.log(player);
      });

    
// }
// };