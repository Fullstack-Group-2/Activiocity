const express = require("express");
const router = express.Router();
const prisma = require("../client.cjs");
const { verify } = require("../utils.cjs");

//get all reviews from the database
router.get("/", async (req, res) => {
  try {
    const reviews = await prisma.review.findMany();

    res.send(reviews);
  } catch (err) {
    console.error(err);
  }
});

//get specific review from database
router.get("/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    const reviews = await prisma.review.findMany({
      where: {
        userId: userId, 
      },
    });

    res.send(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching reviews");
  }
});

//create new review if auth
router.post("/", verify, async (req, res) => {
  const { review, rating, id } = req.body;

  if (!req.user) {
    return res.status(400).send("not a user");
  }

  try {
    const createdReview = await prisma.review.create({
      data: {
        review,
        rating: parseInt(rating), // Assuming rating is sent as a number
        user_id: {
          connect: { id: parseInt(req.user.id) },
        }, // Connecting the review to the user
        activity_id: {
          connect: { id: parseInt(id.id) },
        },
      },
    });

    res.status(201).json(createdReview);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating review");
  }
});

//if auth modify review
router.patch("/", verify, async (req, res) => {
  const editReview = req.body;

  if (!req.user) {
    res.sendStatus(401);
  } else {
    try {
      const updatedReview = await prisma.review.patch({
        data: editReview,
      });
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
});

//if auth delete review
router.delete("/", verify, async (req, res) => {
  const deleteReview = req.body;

  if (!req.user) {
    res.sendStatus(401);
  } else {
    try {
      const result = await prisma.review.delete({
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
