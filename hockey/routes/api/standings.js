const router = require("express").Router();
const standingsController = require("../../controllers/standingsController");

router.route("/goals")
  .get(standingsController.goals)

  router.route("/assists")
  .get(standingsController.assists)

  router.route("/points")
  .get(standingsController.points)
  
  module.exports = router;