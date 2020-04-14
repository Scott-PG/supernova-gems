const db = require("../db");
const Product = require("../models/product");
const faker = require("faker");
let fs = require("fs");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  let products = [
    {
      name: 'Out-Of-This-World Heart',
      imgURL: 'https://i.imgur.com/e8x3pMI.jpg',
      description: 'Facere libero expedita illum.',
      price: '765.00',
      jType: 'necklace',
      jCollection: 'women'
    }
    ,
    {
      name: 'Shooting Star',
      imgURL: 'https://i.imgur.com/EDQGcUQ.jpg',
      description: 'Reiciendis omnis sit vero id quasi praesentium animi.',
      price: '973.00',
      jType: 'necklace',
      jCollection: 'women'
    }
    ,
    {
      name: 'Elemental Rose',
      imgURL: 'https://i.imgur.com/7dzvwge.jpg',
      description: 'Facilis fugiat incidunt porro quia in voluptatum cum.',
      price: '595.00',
      jType: 'necklace',
      jCollection: 'women'
    }
    ,
    {
      name: 'Total Recall',
      imgURL: 'https://i.imgur.com/isYU2CA.jpg',
      description: 'Consectetur est qui non sit doloremque.',
      price: '391.00',
      jType: 'earrings',
      jCollection: 'women'
    }
    ,
    {
      name: 'Interstellar Sparkle',
      imgURL: 'https://i.imgur.com/16QJsA8.jpg',
      description: 'Et dolores qui tempora amet.',
      price: '245.00',
      jType: 'necklace',
      jCollection: 'women'
    }
    ,
    {
      name: 'Deimos Fury',
      imgURL: 'https://i.imgur.com/xeIQPve.jpg',
      description: 'Fugiat maxime nisi repellat.',
      price: '821.00',
      jType: 'necklace',
      jCollection: 'women'
    }
    ,
    {
      name: 'Shooting Star',
      imgURL: 'https://i.imgur.com/raborD0.jpg',
      description: 'Et fugiat ducimus.',
      price: '59.00',
      jType: 'earrings',
      jCollection: 'women'
    }
    ,
    {
      name: 'Celestial Light',
      imgURL: 'https://i.imgur.com/bxgUjN7.jpg',
      description: 'A soluta cum.',
      price: '586.00',
      jType: 'earrings',
      jCollection: 'women'
    }
    ,
    {
      name: 'Zathura',
      imgURL: 'https://i.imgur.com/LVt27mz.jpg',
      description: 'Ut qui dolorum maxime eos consequatur perferendis incidunt.',
      price: '303.00',
      jType: 'bracelet',
      jCollection: 'women'
    }
    ,
    {
      name: 'Space Jam',
      imgURL: 'https://i.imgur.com/BzutjV4.jpg',
      description: 'Dolor praesentium cumque.',
      price: '675.00',
      jType: 'cufflinks',
      jCollection: 'men'
    }
    ,
    {
      name: 'Sol Ascending',
      imgURL: 'https://i.imgur.com/hmqsgAc.jpg',
      description: 'Accusamus cupiditate necessitatibus dolor voluptatem ut nemo.',
      price: '183.00',
      jType: 'necklace',
      jCollection: 'women'
    }
    ,
    {
      name: 'Shooting Star',
      imgURL: 'https://i.imgur.com/b8ZKoFb.jpg',
      description: 'Quam et iste libero dolor soluta rerum.',
      price: '281.00',
      jType: 'bracelet',
      jCollection: 'women'
    }
    ,
    {
      name: 'Space Adventure',
      imgURL: 'https://i.imgur.com/jXK0ul5.jpg',
      description: 'Nulla sed officiis error similique.',
      price: '216.00',
      jType: 'earrings',
      jCollection: 'women'
    }
    ,
    {
      name: 'Gattaca',
      imgURL: 'https://i.imgur.com/dqTmzdZ.png',
      description: 'Rerum sit sunt error optio aut perferendis maiores recusandae tempora.',
      price: '230.00',
      jType: 'cufflinks',
      jCollection: 'men'
    }
    ,
    {
      name: 'Neptune Accent',
      imgURL: 'https://i.imgur.com/TYISVuh.jpg',
      description: 'Voluptatibus molestiae consequatur magnam deserunt et sapiente.',
      price: '223.00',
      jType: 'earrings',
      jCollection: 'women'
    }
    ,
    {
      name: 'Sunflare',
      imgURL: 'https://i.imgur.com/UcECphU.jpg',
      description: 'Id quia officiis modi modi suscipit vitae neque.',
      price: '644.00',
      jType: 'earrings',
      jCollection: 'women'
    }
    ,
    {
      name: 'Polaris Rose',
      imgURL: 'https://i.imgur.com/61bXd8n.jpg',
      description: 'Sit quis eos ut porro aperiam totam incidunt velit illo.',
      price: '6.00',
      jType: 'necklace',
      jCollection: 'women'
    }
    ,
    {
      name: 'Celestial Cluster',
      imgURL: 'https://i.imgur.com/LoiCvUi.jpg',
      description: 'Suscipit necessitatibus voluptas.',
      price: '109.00',
      jType: 'necklace',
      jCollection: 'women'
    }
    ,
    {
      name: 'Space Bling',
      imgURL: 'https://i.imgur.com/3nbi8aR.jpg',
      description: 'Neque aperiam dolorem nihil magnam aut provident nostrum.',
      price: '912.00',
      jType: 'cufflinks',
      jCollection: 'men'
    }
    ,
    {
      name: 'Laika Dog Tag',
      imgURL: 'https://i.imgur.com/J9cbKVQ.jpg',
      description: 'Necessitatibus porro veniam perferendis dolor eaque aut eveniet.',
      price: '95.00',
      jType: 'pendant',
      jCollection: 'men'
    }
    ,
    {
      name: 'Galaxy Knots',
      imgURL: 'https://i.imgur.com/uooF06y.jpg',
      description: 'Libero voluptate quasi ipsa fugit id pariatur facere.',
      price: '203.00',
      jType: 'bracelet',
      jCollection: 'men'
    }
    ,
    {
      name: 'The Force Awakens',
      imgURL: 'https://i.imgur.com/G81kifT.jpg',
      description: 'Expedita tenetur ex earum qui omnis dolorum aut quod.',
      price: '571.00',
      jType: 'ring',
      jCollection: 'men'
    }
    ,
    {
      name: 'Intergalactic Rose',
      imgURL: 'https://i.imgur.com/xcOWNYc.jpg',
      description: 'Porro minus tempora illum accusantium itaque.',
      price: '841.00',
      jType: 'ring',
      jCollection: 'engagement'
    }
    ,
    {
      name: 'Shooting Star',
      imgURL: 'https://i.imgur.com/qnCscUY.jpg',
      description: 'Incidunt accusantium non sit dolorum.',
      price: '576.00',
      jType: 'ring',
      jCollection: 'engagement'
    }
    ,
    {
      name: 'Classy Martian',
      imgURL: 'https://i.imgur.com/mGlIFMa.jpg',
      description: 'Ipsam commodi non enim molestiae consequatur officia.',
      price: '711.00',
      jType: 'ring',
      jCollection: 'women'
    }
    ,
    {
      name: 'Armageddon',
      imgURL: 'https://i.imgur.com/IUxr4OV.jpg',
      description: 'Quia eos eos.',
      price: '817.00',
      jType: 'ring',
      jCollection: 'engagement'
    }
    ,
    {
      name: 'Eternal Love',
      imgURL: 'https://i.imgur.com/54bPuBi.jpg',
      description: 'Fuga voluptatem mollitia quaerat cum.',
      price: '578.00',
      jType: 'ring',
      jCollection: 'engagement'
    }
    ,
    {
      name: 'Supernova Heart',
      imgURL: 'https://i.imgur.com/omPy2Mg.jpg',
      description: 'Odit eligendi ipsum itaque consequatur illum iure consequatur.',
      price: '908.00',
      jType: 'ring',
      jCollection: 'engagement'
    }
    ,
    {
      name: 'Neptune Accent',
      imgURL: 'https://i.imgur.com/r9PM5FW.jpg',
      description: 'Porro ipsa rerum.',
      price: '629.00',
      jType: 'ring',
      jCollection: 'engagement'
    }
    ,
    {
      name: 'Luna',
      imgURL: 'https://i.imgur.com/AaQQV07.jpg',
      description: 'Fugit neque dolor ut tempora eum nemo blanditiis architecto.',
      price: '346.00',
      jType: 'ring',
      jCollection: 'engagement'
    }
    ,
    {
      name: 'Venusian Mist',
      imgURL: 'https://i.imgur.com/Wi7vpBY.jpg',
      description: 'Illum aut eligendi minima voluptas.',
      price: '312.00',
      jType: 'ring',
      jCollection: 'engagement'
    }
    ,
    {
      name: 'Sol Ascending',
      imgURL: 'https://i.imgur.com/Wj7w6ED.jpg',
      description: 'Quisquam qui et dolores sed.',
      price: '66.00',
      jType: 'ring',
      jCollection: 'engagement'
    }
    ,
    {
      name: 'Borg Cube',
      imgURL: 'https://i.imgur.com/fjUI62x.jpg',
      description: 'Enim doloribus in.',
      price: '902.00',
      jType: 'cufflinks',
      jCollection: 'men'
    }
    ,
    {
      name: 'Manacles of Heaven',
      imgURL: 'https://i.imgur.com/fcKqf8F.jpg',
      description: 'Et modi sed impedit dolore.',
      price: '536.00',
      jType: 'bracelet',
      jCollection: 'men'
    }
    ,
    {
      name: 'Space Odyssey',
      imgURL: 'https://i.imgur.com/1rPI6HD.jpg',
      description: 'Laborum similique ex fugiat rerum dolorem veniam.',
      price: '267.00',
      jType: 'ring',
      jCollection: 'men'
    }

  ]

  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();
