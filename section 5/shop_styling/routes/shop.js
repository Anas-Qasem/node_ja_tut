const express = require("express");
const router = express.Router();
const path = require("path");
const routeDir = require("../utils/path");
router.get("/", (req, res, next) => {
  res.sendFile(path.join(routeDir, "view", "shop.html"));
});
module.exports = router;
