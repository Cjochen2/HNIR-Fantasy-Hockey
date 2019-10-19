const db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log(req.body)
        db.Team.create({
            p1: req.body.name,
            p2: req.body.name,
            p3: req.body.name,
            p4: req.body.name,
            p5: req.body.name
        })
    }
}