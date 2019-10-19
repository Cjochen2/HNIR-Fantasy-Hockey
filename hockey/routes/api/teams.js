const router = require("express").Router();
const teamController = require("../../controllers/teamController");

router.route("/")
  .post(teamController.create);

module.exports = router;