const router = require("express").Router();
const playerRoutes = require("./players");
const standingRoutes = require("./standings");

// API routes
router.use("/players", playerRoutes);

router.use("/standings", standingRoutes);



module.exports = router;
