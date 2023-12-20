const express = require("express");
const router = express.Router();
const prisma = require("../client");
const { verify } = require("../utils");

//get all reviews from the database
router.get("/", async (req, res) => {
  try {
    const reviews = await prisma.reviews.findMany();

    res.send(reviews);
  } catch (err) {
    console.error(err);
  }
});

//get specific review from database
router.get("/:id", async (req, res) => {
  const reviewId = parseInt(req.params.id);
  const review = await prisma.review.findUnique({
    where: { id: reviewId },
  });
  res.send(review || {});
});

//create new review if auth
router.post("/", async (req, res) => {
  const newReview = req.body;

  if (!req.user) {
    res.sendStatus(401);
  } else {
    try {
      const result = await prisma.review.create({
        data: newReview,
      });
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
});

//if auth modify review
router.patch("/", async (req, res) => {
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
router.delete("/", async (req, res) => {
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
