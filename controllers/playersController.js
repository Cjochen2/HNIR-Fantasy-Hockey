const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Stat.findAll({}).then(players => res.json(players))
    .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Stat
      .findOne({ where: req.body.where })
      .then(function (foundItem) {
        if (!foundItem) {
          // Item not found, create a new one
          db.Stat
            .create(req.body.player)
            .then(function (item) { res.json({ item: item, created: true }); })
        } else {
          // Found an item, update it
         db.Stat
            .update(req.body.player, { where: req.body.where })
            .then(function (item) { res.json({ item: item, created: false }); })
        }
      })
  },
};
