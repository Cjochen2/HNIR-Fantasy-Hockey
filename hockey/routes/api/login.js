const router = require("express").Router();
const loginController = require("../../controllers/loginController");

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.json({token: "You're good."})
    } else {
        next();
    }
}

// Matches with "/api/books"
router.route("/")
    .get(sessionChecker, loginController.load)
    .post(loginController.login);



module.exports = router;
