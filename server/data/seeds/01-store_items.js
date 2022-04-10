exports.seed = async function (knex) {
  return knex("store_items").insert([
    {
      name: "Chonky Chip",
      image: "chonky_chip.png",
      description:
        "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
      price: 3,
    },
    {
      name: "All Your Bread Are Belong To Us",
      image: "bread.png",
      description:
        "Eat it raw or toast it with boysenberry jelly exclusively. Other jellies are not our jam. Or have a slice with avocado and disappoint your parents.",
      price: 7,
    },
    {
      name: "Based Brownies",
      image: "rainbow.png",
      description:
        "Almond butter based brownies to nourish your body and superiority. Paleo and gluten free.",
      price: 4,
    },
    {
      name: "Champ's Elycakes",
      image: "balls.png",
      description:
        "Fake sophistication and orgasms pair well with our champagne cake. Eat with a tiny fork and an upturned nose.",
      price: 6,
    },
    {
      name: "Power Bitch Balls",
      image: "balls.png",
      description:
        "Be prepared for a hot date. Infused with maca powder so you're certain to impress your partner with your virility",
      price: 10,
    },
    {
      name: "Green Brrrrito",
      image: "bread.png",
      description:
        "Fed up with your current debts? We've got you covered. All green shit and eggs and cheese and green salsa. No substitutions.",
      price: 8,
    },
    {
      name: "They Cookies",
      image: "chonky_chip.png",
      description:
        "Cis gendered beings not allowed. These anuenue allies are crumbly, to remind you to do your part to crumble the patriarchy.",
      price: 10,
    },
    {
      name: "Hat",
      image: "merch.png",
      description: "Headwear for the fashionablest beings",
      price: 24,
    },
    {
      name: "Comfy Swetter",
      image: "merch.png",
      description: "Finest materials for you to be cozy",
      price: 30,
    },
    {
      name: "Ellegant Jammies",
      image: "merch.png",
      description: "Procrastinate in style",
      price: 60,
    },
  ]);
};
