const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/books"
router.route("/")
  // .get(booksController.findAll)
  .post(loginController.create);

  module.exports = router;

