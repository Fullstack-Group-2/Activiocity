const router = require("express").Router();


router.use("/user", require("./user.cjs"));
router.use("/auth", require("./auth.cjs"));

module.exports = router;
