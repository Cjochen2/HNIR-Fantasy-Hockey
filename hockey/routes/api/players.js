const router = require("express").Router();
const playersController = require("../../controllers/playersController");

// Matches with "/api/books"
router.route("/")
  .get(playersController.findAll)
  .put(playersController.update)
  .post(playersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(playersController.findById)
  .put(playersController.update)
  .delete(playersController.remove);

module.exports = router;
