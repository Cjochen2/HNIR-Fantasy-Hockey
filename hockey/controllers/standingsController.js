const db = require("../models");

// Defining methods for the booksController
module.exports = {
  goals: function (req, res) {
    db.Stat.findAll({
        order: [
            ['goals', 'DESC']
        ]
    }).then(players => res.json(players))
    .catch(err => res.status(422).json(err));
  },

  assists: function (req, res) {
    db.Stat.findAll({
        order: [
            ['assists', 'DESC']
        ]
    }).then(players => res.json(players))
    .catch(err => res.status(422).json(err));
  },

  points: function (req, res) {
    db.Stat.findAll({
        order: [
            ['points', 'DESC']
        ]
    }).then(players => res.json(players))
    .catch(err => res.status(422).json(err));
  },
};