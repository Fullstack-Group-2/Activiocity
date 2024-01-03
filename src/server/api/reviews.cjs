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
router.get("/:id", async (req, res) => {
  const reviewId = parseInt(req.params.id);
  const review = await prisma.review.findUnique({
    where: { id: reviewId },
  });
  res.send(review || {});
});

//create new review if auth
router.post("/", verify, async (req, res, next) => {
  const newReview = req.body;
  console.log("NEW REVIEW", newReview);
  if (!req.user) {
   
    res.sendStatus(401);
  } else {
    try {
      
      const result = await prisma.review.create({
        data: newReview,
      });
      console.log("RESULT" , result);
      res.send(result);
    } catch (err) {
      console.log("ERROR", err);
      next(err);
    }
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
