
const prisma = require("./src/server/client.cjs");
const bcrypt = require("bcrypt");


const saltRounds = 5;

/*const users = [
  { username: "Ahmad", password: "password" },
  { username: "Steven", password: "password" },
  { username: "Michael", password: "password" },
];
*/
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
      imageURL: "add some img here"
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
      imageURL: "add some img here"
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
      imageURL: "add some img here"
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
      imageURL: "add some img here"
    },
  });

  const review1 = await prisma.review.create({
    data: {
      userId: Ahmad.id,
      activityId: camping.id,
      rating: 2,
      review: "lskdfjsdl"
    },
  });

  const review2 = await prisma.review.create({
    data: {
      userId: Steven.id,
      activityId: snowboarding.id,
      rating: 5,
      review: "laskdjfldsakjf"
    },
  });

  const review3 = await prisma.review.create({
    data: {
      userId: Michael.id,
      activityId: skiing.id,
      rating: 3,
      review: "sldkfjsd"
    },
  });

  const comment1 = await prisma.comment.create({
    data: {
      userId: Steven.id,
      reviewId: review1.id,
      comment: "lkfjoierj"
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      userId: Ahmad.id,
      reviewId: review2.id,
      comment: "sdlkjdsglj"
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      userId: Steven.id,
      reviewId: review2.id,
      comment: "weoifsdlfkhj"
    },
  });
console.log("DATABASE SEEDED SUCCESSFULLY")
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