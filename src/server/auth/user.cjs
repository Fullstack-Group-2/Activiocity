const express = require("express");
const router = express.Router();
const prisma = require("../client.cjs");
const bcrypt = require("bcrypt");
const {verify} = require("../utils.cjs")
// const jwt = require("jsonwebtoken");

// all users.....  /auth/user
router.get("/", async (req, res, next) => {
    try {
      const users = await prisma.user.findMany();
  
      res.send(users);
    } catch (err) {
      console.error(err);
    }
  });

//single user by id........ /auth/user/number of id
  router.get("/:id", async (req, res) => {
    const userId = parseInt(req.params.id);
  
    const singleUser = await prisma.user.findUnique({
      where: { id: userId },
    });
    res.send(singleUser || {});
  });

  // create a user
  router.post("/register", async (req, res) => {
    const {username, password} = req.body;
    const saltRounds = 5;
      try {
        const hashedPassword = await 
        bcrypt.hash(password,saltRounds)
        const result = await prisma.user.create({
          data: {
               username,
               password: hashedPassword,
            },
        });
        res.send(result);
      } catch (err) {
        res.send(err);
      }
    }
  );

   // update an user
  router.patch("/", async (req, res) => {
    const editUser = req.body;
  
    if (!req.user) {
      res.sendStatus(401);
    } else {
      try {
        const updatedresult = await prisma.user.patch({
          data: editUser,
        });
        res.send(updatedresult);
      } catch (err) {
        res.send(err);
      }
    }
  });

  // update an user
  router.delete("/:id", verify, async (req, res) => {
    const deleteUserId = +req.params.id;
  console.log(deleteUserId);
    if (!req.user) {
      res.sendStatus(401);
    } else {
      try {
        const userReviews = await prisma.review.findMany({
          where: {
            userId:deleteUserId,
          }
        });
        console.log(userReviews);
        for(let i = 0; i < userReviews.length; i++) {
        await prisma.comment.deleteMany({
          where: {
            reviewId: userReviews.id,
          }
        });}
        await prisma.review.deleteMany({
          where: {
            userId: deleteUserId,
          }
        });
        const deletedResult = await prisma.user.delete({
          where: {
            id: deleteUserId,
          },
        });
        res.send(deletedResult);
      } catch (err) {
        res.send(err);
      }
    }
  });
module.exports = router;



