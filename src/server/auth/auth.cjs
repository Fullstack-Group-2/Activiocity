const express = require("express");
const router = express.Router();
const prisma = require("../client.cjs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        isAdmin: false,
      },
    });
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET
    );
    res.status(201).send({ token });
  } catch (err) {
    console.error(err);
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(418).send({
      message:
        "Access DENIED!!!!: Incorrect USERNAME or PASSWORD: Not one of the kool kidz!",
    });
    return;
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        username:username,
      },
    });
 
    if(!user) { res.status(401).send({message: "No User by that name. Enter valid user and password."});return;}
    else{
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        res
          .status(401)
          .send({ message: "Nice try Goldilocks! but not today JR!Wrong Password." });
        return;
      }
      const token = jwt.sign(
        { id: user.id, username: user.username,},
        process.env.JWT_SECRET
      );
      res.status(200).send({ token , user});
    }  
    
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
