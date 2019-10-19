const router = require("express").Router();
const playerRoutes = require("./players");
const standingRoutes = require("./standings");
const teamRoutes = require("./teams");
// API routes
router.use("/players", playerRoutes);

router.use("/standings", standingRoutes);

router.use("/team", teamRoutes)
// const loginRoutes = require("./loginRoutes")

// Book routes
//router.use("/players", playerRoutes);

// router.use("/user", userRoutes)

// router.use("/registration", loginRoutes)

module.exports = router;
