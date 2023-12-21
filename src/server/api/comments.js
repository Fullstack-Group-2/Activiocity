const express = require("express");
const router = express.Router();
const prisma = require("../client");
const { verify } = require("../utils");

//grab the comments from the database
router.get("/", async (req, res, next) => {
  try {
    const comments = await prisma.comment.findMany();

    res.send(comment);
  } catch (err) {
    send.err(err);
  }
});

//get individual comment from db
router.get("/:id", async (req, res) => {
  const commentId = parseInt(req.params.id);

  const comment = await prisma.comment.findUnique({
    where: { id: commentId },
  });
});

//create a new comment WILL NEED TO ADD ADMIN FUNCTION TO THIS
router.post("/", async (req, res) => {
  const newComment = req.body;

  if (!req.user) {
    res.sendStatus(401);
  } else {
    try {
      const result = await prisma.comment.create({
        data: newComment,
      });
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
});

//modify a comment in the db ADMIN WILL ALSO NEED ACCESS TO THIS FUNCTION
router.patch("/", async (re, res) => {
  const editComment = req.body;

  if (!req.user) {
    res.sendStatus(401);
  } else {
    try {
      const updatedresult = await prisma.comment.patch({
        data: editComment,
      });
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  }
});

//delete comment ADD FUNCTION FOR ADMIN
router.delete("/", async (req, res) => {
  const deleteComment = req.body;

  if (!req.user) {
    res.sendStatus(401);
  } else {
    try {
      const result = await prisma.comment.delete({
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
