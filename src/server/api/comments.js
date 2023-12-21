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
