const router = require("express").Router();
const playerRoutes = require("./players");
const standingRoutes = require("./standings");
// API routes
router.use("/players", playerRoutes);

router.use("/standings", standingRoutes);

// const loginRoutes = require("./loginRoutes")

// Book routes
//router.use("/players", playerRoutes);

// router.use("/user", userRoutes)

// router.use("/registration", loginRoutes)

module.exports = router;
