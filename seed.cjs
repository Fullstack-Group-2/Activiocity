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
  const hashedAhmad = await bcrypt.hash("password", saltRounds);
  const Ahmad = await prisma.user.create({
    data: {
      username: "Ahmad",
      password: hashedAhmad,
      isAdmin: false,
    },
  });

  const hashedSteven = await bcrypt.hash("password", saltRounds);
  const Steven = await prisma.user.create({
    data: {
      username: "Steven",
      password: hashedSteven,
      isAdmin: true,
    },
  }); 
  
  const hashedMichael = await bcrypt.hash("password", saltRounds);
  const Michael = await prisma.user.create({
    data: {
      username: "Michael",
      password: hashedMichael,
      isAdmin: false,
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
      imageURL:
        "https://cdn.skimag.com/wp-content/uploads/2023/07/GettyImages-1043796250-scaled.jpg",
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
      imageURL:
        "https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2015/04/ThinkstockPhotos-114404419.jpg?fit=730%2C480&ssl=1",
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
      imageURL:
        "https://asomammoth.com/wp-content/uploads/2023/05/Snowboarders-scaled.jpeg",
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
      imageURL:
        "https://fwp.mt.gov/binaries/content/gallery/mtfwpproject/fwpimageset/smallhero/camping_small_hero.jpg/camping_small_hero.jpg/mtfwpproject%3AHeroSmall",

    },
  });

  const bowling = await prisma.activity.create({
    data: {
      title: "Pin Tower",
      description: "Bowling great for family gatherings",
      location: "Atlanta",
      seasonCategory: "Fall",
      isWet: false,
      rating: 3,
      imageURL:
        "https://www.jbcharleston.com/images/fun/bowling-centers/hero/marringtonbowling.jpg",
    },
  });

  const castino = await prisma.activity.create({
    data: {
      title: "Best of 21",
      description: "Test your luck",
      location: "Las Vegas",
      seasonCategory: "Winter",
      isWet: false,
      rating: 4,
      imageURL:
        "https://a.cdn-hotels.com/gdcs/production153/d924/dd73480c-6248-4372-ac5c-a17c7bf9069f.jpg",

    },
  });

  const archery = await prisma.activity.create({
    data: {
      title: "Shoot like Robin Hood",
      description: "Perfect your aim with archery",
      location: "New Jersey",
      seasonCategory: "Summer",
      isWet: false,
      rating: 2,
      imageURL:
        "https://www.goodnet.org/photos/620x0/39300_hd.jpg",

    },
  });

  const paraSailing = await prisma.activity.create({
    data: {
      title: "Fly like a Bird",
      description: "View the city from a different angle",
      location: "Jamaica",
      seasonCategory: "Spring",
      isWet: true,
      rating: 5,
      imageURL:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/58/f5/cd/island-parasail.jpg?w=1200&h=-1&s=1",

    },
  });

  const scubaDiving  = await prisma.activity.create({
    data: {
      title: "Swim like a fish",
      description: "View the beautiful world under the sea",
      location: "Atlantic Ocean",
      seasonCategory: "Summer",
      isWet: true,
      rating: 4,
      imageURL:
        "https://www.keywestscubadiving.com/wp-content/uploads/sites/62/sites/8/2019/07/Key-West-Scuba-Diving-3-2048x1365.jpg",

    },
  });

  const hiking = await prisma.activity.create({
    data: {
      title: "Walk til you drop",
      description: "Beautiful walk in the outdoors",
      location: "Tropics",
      seasonCategory: "Summer",
      isWet: true,
      rating: 5,
      imageURL:
        "https://images.downeast.com/wp-content/uploads/2023/06/Waterfalls-fb-jpg.webp",

    },
  });

  

  const review1 = await prisma.review.create({
    data: {
      userId: Ahmad.id,
      activityId: camping.id,
      rating: 2,
      review: "Camping was amazing but I hated the bugs",
    },
  });

  const review2 = await prisma.review.create({
    data: {
      userId: Steven.id,
      activityId: snowboarding.id,
      rating: 5,
      review: "Best thing I ever did",
    },
  });

  const review3 = await prisma.review.create({
    data: {
      userId: Michael.id,
      activityId: scubaDiving.id,
      rating: 3,
      review: "It was nice",
    },
  });


  const review4 = await prisma.review.create({
    data: {
      userId: Michael.id,
      activityId: castino.id,
      rating: 1,
      review: "I lost all my money, drinks were great tho :(",
    },
  });


  // const review5 = await prisma.review.create({
  //   data: {
  //     userId: ,
  //     activityId: scubaDiving.id,
  //     rating: 3,
  //     review: "It was nice",
  //   },
  // });

  const comment1 = await prisma.comment.create({
    data: {
      userId: Steven.id,
      reviewId: review1.id,
      comment: "lkfjoierj",
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      userId: Ahmad.id,
      reviewId: review2.id,
      comment: "sdlkjdsglj",
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      userId: Steven.id,
      reviewId: review2.id,
      comment: "weoifsdlfkhj",
    },
  });
  console.log("DATABASE SEEDED SUCCESSFULLY");
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
