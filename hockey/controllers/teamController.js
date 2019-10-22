const db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log(req.body)
        let team = req.body.team
        db.Team.create({
            teamName: req.body.userTeam,
            player1: team[0].id,
            // points1: req.body.team[0].points,
            player2: team[1].id,
            // points2: req.body.team[1].points,
            player3: team[2].id,
            // points3: req.body.team[2].points,
            player4: team[3].id,
            // points4: req.body.team[3].points,
            player5: team[4].id,
            // points5: req.body.team[4].points,
            points: parseInt(team[0].points) + parseInt(team[1].points) + parseInt(team[2].points) + parseInt(team[3].points) + parseInt(team[4].points),
            UserId: req.session.user.id
        })
        .then(
            res.json({teamCreated: true})
            )
    }
}