const router = require("express").Router();
const playersController = require("../../controllers/playersController");

router.route("/")
  .get(playersController.findAll)
  .post(playersController.create);

module.exports = router;
