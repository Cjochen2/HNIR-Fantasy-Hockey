const axios = require('axios');
const cheerio = require('cheerio');


module.exports = {


  players: function () {
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

    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    for (var j = 0; j < teams.length; j++) {
      let globe = teams[j].id;
      let teamName = teams[j].team;

      axios.get(proxyurl + "https://www.hnir.net/stats/team_instance/" + globe + "?subseason=634286&tab=team_instance_player_stats&tool=3832997")
        .then(function (response) {

          var $ = cheerio.load(response.data);
          var results = [];

          $("#player-sm-division-ice_hockey_skater-table").children('tbody').children('tr').each(function (i, element) {
            let goals = $(element).children().eq(3).text().trim()
            let assists = $(element).children().eq(4).text().trim()
            let player = {
              jerseyNumber: $(element).children(".jersey-number").text().trim() || 0,
              name: $(element).children(".statPlayer").text().trim(),
              team: teamName,
              gamesPlayed: $(element).children().eq(2).text().trim(),
              goals: goals,
              assists: assists,
              points: parseInt(goals) + parseInt(assists)
            };
            results.push({ player: player });

          });
          console.log(results);
        })
    }
  },

}