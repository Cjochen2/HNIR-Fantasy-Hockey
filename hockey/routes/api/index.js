const router = require("express").Router();
const playerRoutes = require("./players");
const standingRoutes = require("./standings");
<<<<<<< HEAD

=======
const teamRoutes = require("./teams");
>>>>>>> 8c7767735f5b53fda95bedc60796dce6eeef8715
// API routes
router.use("/players", playerRoutes);

router.use("/standings", standingRoutes);

<<<<<<< HEAD
=======
router.use("/team", teamRoutes)
// const loginRoutes = require("./loginRoutes")

// Book routes
//router.use("/players", playerRoutes);

// router.use("/user", userRoutes)
>>>>>>> 8c7767735f5b53fda95bedc60796dce6eeef8715


module.exports = router;
