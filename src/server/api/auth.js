const express = require("express");
const router = express.Router();
const prisma = require("../client");
const saltRounds = 10;

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try{
    const user = await.prisma.user.create({
      data: {
        username,
        password: hashedPassword;
      }
    });
    const token=jwt.sign(
      {id: user.id, username: user.username};
      process.env.JWT_SECRET
    );
  }
});
