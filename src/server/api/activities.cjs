const express = require("express");
const router = express.Router();
const prisma = require("../client.cjs");
const { verify } = require("../utils.cjs");

//get all activities from database
router.get("/", async (req, res, next) => {
  try {
    const activities = await prisma.activity.findMany();

    res.send(activities);
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

//create new activity
router.post("/", async (req, res) => {
  const newActivity = req.body;

  if (!req.user) {
    res.sendStatus(401);
  } else {
    try {
      const result = await prisma.activity.create({
        data: newActivity,
      });
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
});

//modify activity (used patch so it only updates what is changed)
router.patch("/", async (re, res) => {
  const editActivity = req.body;

  if (!req.user) {
    res.sendStatus(401);
  } else {
    try {
      const updatedresult = await prisma.activity.patch({
        data: editActivity,
      });
      res.send(updatedresult);
    } catch (err) {
      res.send(err);
    }
  }
});

//delete activity
router.delete("/", async (req, res) => {
  const deleteActivity = req.body;

  if (!req.user) {
    res.sendStatus(401);
  } else {
    try {
      const result = await prisma.activity.delete({
        where: {
          id: [id],
        },
      });
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
});

module.exports = router;
