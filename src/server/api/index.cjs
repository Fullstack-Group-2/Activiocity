const express = require("express");
const router = express.Router();

router.use("/activities", require("./activities.cjs"));
router.use("/reviews", require("./reviews.cjs"));
router.use("/comments", require("./comments.cjs"));

module.exports = router;



