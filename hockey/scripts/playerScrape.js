var mysql = require("mysql");
var cheerio = require("cheerio");
var axios = require("axios");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "players"
});

connection.connect(function (err) {
  if (err) throw err;
});
var express = require("express");


var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync({force: true}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


const teams = [
  {
    id: 4909229,
    team: "The Boys"
  },

  {
    id: 4909227,
    team: "Buzzed Hockey Club"
  },

  {
    id: 4909228,
    team: "Cowley's Chaos"
  },

  {
    id: 4965687,
    team: "Double Deuce"
  },

  {
    id: 4909226,
    team: "Kelly's Heroes"
  }
]




for (var i = 0; i < teams.length; i++) {
  globe = teams[i].id;
  //teamName = teams[i].team;





  axios.get("https://www.hnir.net/stats/team_instance/" + globe + "?subseason=634286&tab=team_instance_player_stats&tool=3832997").then(function (response) {
    

    var $ = cheerio.load(response.data);

    var results = [];

    $("#player-sm-division-ice_hockey_skater-table").children('tbody').children('tr').each(function (i, element) {


      let player = {
        jerseyNumber: $(element).children(".jersey-number").text().trim() || null,
        name: $(element).children(".statPlayer").text().trim(),
        //team: teamName,
        gamesPlayed: $(element).children().eq(2).text().trim(),
        goals: $(element).children().eq(3).text().trim(),
        assists: $(element).children().eq(4).text().trim()


      };
      results.push(player);
      db.Stat.create(player).then((err, res) => {
        console.log(player);
      });

    });
  })
};