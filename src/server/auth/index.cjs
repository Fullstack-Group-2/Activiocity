const router = require("express").Router();


router.use("/user", require("./user.cjs"));

module.exports = router;
