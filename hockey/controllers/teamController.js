const db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log(req.body)
        db.Team.create({
            p1: req.body.team[0].id,
            p2: req.body.team[1].id,
            p3: req.body.team[2].id,
            p4: req.body.team[3].id,
            p5: req.body.team[4].id
        })
    }
}