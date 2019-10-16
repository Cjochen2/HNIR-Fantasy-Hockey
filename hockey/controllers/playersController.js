const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Stat.findAll({}).then(players => res.json(players))
    .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
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
  update: function (req, res) {
    // req.forEach(function (data) {
    //   db.Stat.findOrCreate({where: {name: data.name}});
    // })
    console.log("this is the update request");

    console.log(req.body);



  },
  remove: function (req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
