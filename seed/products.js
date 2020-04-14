const db = require("../db");
const Product = require("../models/product");
const faker = require("faker");
let fs = require("fs");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  let products = [];

  let fs = require("fs");
  text = fs.readFileSync("./P3Seed.csv").toString("utf-8");
  let textByLine = text.split("\n");

  textByLine.map((line) => {
    if (line) {
      let fields = line.split(",");

      const prod = {
        name: fields[0] ? fields[0] : faker.lorem.words(),
        imgURL: fields[1] ? fields[1] : "https://example.com",
        description: fields[2] ? fields[2] : faker.lorem.sentence(),
        price: fields[3] ? fields[3] : faker.commerce.price(),
        jType: fields[4] ? fields[4] : "ring",
        jCollection: fields[5] ? fields[5] : "women",
      };

      console.log(prod);
      products.push(prod);
    }
  });

  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();
