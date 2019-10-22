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

  userTeams: function (req, res) {
    db.Team.findAll({where: {UserId: req.session.user.id}})
    .then(teams => res.json(teams))
    .catch(err => res.status(422).json(err))
  },

  leagueTeams: function (req, res) {
    db.Team.findAll({
      order: [
        ['points', 'DESC']
      ]
    })
    .then(teams => res.json(teams))
    .catch(err => res.status(422).json(err))
  }
};