const express = require("express");
const router = express.Router();
const prisma = require("../client");

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
});
