const router = require("express").Router();
const playerRoutes = require("./players");
const userRoutes = require("./users");
// Book routes
router.use("/players", playerRoutes);

// const loginRoutes = require("./loginRoutes")

// Book routes
router.use("/players", playerRoutes);

// router.use("/user", userRoutes)

// router.use("/registration", loginRoutes)

module.exports = router;
