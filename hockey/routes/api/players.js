const router = require("express").Router();
const playersController = require("../../controllers/playersController");

router.route("/")
  .get(playersController.findAll)
  .post(playersController.create);

<<<<<<< HEAD
router.route("/scrape")
  .get(playersController.create)


=======
>>>>>>> 8c7767735f5b53fda95bedc60796dce6eeef8715
module.exports = router;
