const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const signUpRoutes = require("./api/signUp")
const loginRoutes = require("./api/login")


// API Routes
router.use("/api", apiRoutes);

router.use("/registration", signUpRoutes);

router.use("/login", loginRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
