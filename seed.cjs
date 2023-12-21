
const { PrismaClient } = require("@prisma/client");
const prisma = require("./src/server/client.js");
const bcrypt = require("bcrypt");


const prisma = new PrismaClient();
const saltRounds = 5;

const users = [
  { username: "Ahmad", password: "password" },
  { username: "Steven", password: "password" },
  { username: "Michael", password: "password" },
];

async function seed() {
  const hashedAhmad = await
    bcrypt.hash("password",saltRounds)
  const Ahmad = await prisma.user.create({
    data: {
      username: "Ahmad",
      password: hashedAhmad
    },
  });

  const hashedSteven = await
    bcrypt.hash("password",saltRounds)
  const Steven = await prisma.user.create({
    data: {
      username: "Steven",
      password: hashedSteven,
    },
  });

  const hashedMichael = await 
  bcrypt.hash("password",saltRounds) 
  const Michael = await prisma.user.create({
    data: {
      username: "Michael",
      password: hashedMichael,
    },
  });

  const skiing = await prisma.activity.create({
    data: {
      title: "SKII ME",
      description: " Ski down snowy hills",
      location: "Anarctica",
      seasonCategory: "Winter",
      isWet: true,
      rating: 4,
      imgURL: "add some img here"
    },
  });

  const jetSkiing = await prisma.activity.create({
    data: {
      title: "WATER BIKES",
      description: "Ride on the road but in water",
      location: "Hawaii",
      seasonCategory: "Summer",
      isWet: true,
      rating: 5,
      imgURL: "add some img here"
    },
  });

  const snowboarding = await prisma.activity.create({
    data: {
      title: "SNOWBOARDER HERE YOU GO",
      description: "Snowboarding all around the world",
      location: "Alaska",
      seasonCategory: "Winter",
      isWet: true,
      rating: 3,
      imgURL: "add some img here"
    },
  });
  const camping = await prisma.activity.create({
    data: {
      title: "ENJOY THE OUTDOORS",
      description: "Camping as if you lived in the woods",
      location: "Ohio",
      seasonCategory: "Spring",
      isWet: false,
      rating: 2,
      imgURL: "add some img here"
    },
  });

  const review1 = await prisma.review.create({
    data: {
      message: "I didn't like the camp site much",
      userId: Ahmad.id,
      activityId: camping.id,
    },
  });

  const review2 = await prisma.review.create({
    data: {
      message: "That was fun!!",
      userId: Steven.id,
      activityId: snowboarding.id,
    },
  });

  const review3 = await prisma.review.create({
    data: {
      message: "I really enjoyed it 10/10",
      userId: Michael.id,
      activityId: skiing.id,
    },
  });

  const comment1 = await prisma.comment.create({
    data: {
      message: "I really enjoyed skiing",
      userId: Steven.id,
      review3
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      message: "It was okay",
      userId: Ahmad.id,
      review2
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      message: "It was okay",
      userId: Steven.id,
      review1
    },
  });

}
seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });