
const prisma = require("./src/server/client.js");
const bcrypt = require("bcrypt");


const users = [
    {username: "Ahmad", password: "password"},
    {username: "Steven", password: "password"},
    {username: "Michael", password: "password"},
];

async function seed() {
    const Ahmad = await prisma.user.create({
        data:{ 
            username : "Ahmad",
            password: await bcrypt.hash("password",5)
        },
    });

  const Steven = await prisma.user.create({
    data: {
      username: "Steven",
      password: await bcrypt.hash("rifle", 5),
    },
  });

  const Michael = await prisma.user.create({
    data: {
      username: "Michael",
      password: await bcrypt.hash("password", 5),
    },
  });

  const skiing = await prisma.activity.create({ 
    data:{
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
    data:{
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
    data:{
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
    data:{
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
      message: "It was okay",
      userId: Steven.id,
      reviewId
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      message: "It was okay",
      userId: Michael.id,
      reviewId
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