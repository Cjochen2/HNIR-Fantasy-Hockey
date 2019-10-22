const router = require("express").Router();
const standingsController = require("../../controllers/standingsController");

router.route("/goals")
  .get(standingsController.goals)

  router.route("/assists")
  .get(standingsController.assists)

  router.route("/points")
  .get(standingsController.points)

  router.route("/userTeams")
  .get(standingsController.userTeams)

  router.route("/leagueTeams")
  .get(standingsController.leagueTeams)
  
  module.exports = router;