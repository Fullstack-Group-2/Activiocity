const express = require("express");
const router = express.Router();
const prisma = require("../client.cjs");
const bcrypt = require("bcrypt");
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

module.exports = router;



