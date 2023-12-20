const express = require("express");
const router = express.Router();
const prisma = require("../client");
const { verify } = require("../utils");

//get all activities from database
router.get("/", async (req, res, next) => {
  try {
    const activities = await prisma.activity.findMany();

    res.send(activity);
  } catch (err) {
    console.error(err);
  }
});

//get activities from database by id
router.get("/:id", async (req, res) => {
  const activityId = parseInt(req.params.id);

  const activity = await prisma.activity.findUnique({
    where: { id: activityId },
  });
  res.send(activity || {});
});

module.exports = router;
