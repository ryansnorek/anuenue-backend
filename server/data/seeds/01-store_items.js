exports.seed = async function (knex) {
  return knex("store_items").insert([
    {
      name: "Chonky Chip",
      image: "images/chonky_chip.png",
      description:
        "She sweet, but she got rich depth and melts in your mouth, like the girl you should have married.",
      price: 3,
    },
    {
      name: "All Your Bread Are Belong To Us",
      image: "images/bread.jpg",
      description:
        "Eat it raw or toast it with boysenberry jelly exclusively. Other jellies are not our jam. Or have a slice with avocado and disappoint your parents.",
      price: 7,
    },
    {
      name: "Based Brownies",
      image: "https://glutenfreeonashoestring.com/wp-content/uploads/2017/09/Fudgy-Gluten-Free-Brownies-stack.jpg",
      description:
        "Almond butter based brownies to nourish your body and superiority. Paleo and gluten free.",
      price: 4,
    },
    {
      name: "Champ's Elycakes",
      image: "images/cake.jpeg",
      description:
        "Fake sophistication and orgasms pair well with our champagne cake. Eat with a tiny fork and an upturned nose.",
      price: 6,
    },
    {
      name: "Power Bitch Balls",
      image: "images/balls.png",
      description:
        "Be prepared for a hot date. Infused with maca powder so you're certain to impress your partner with your virility",
      price: 10,
    },
    {
      name: "Green Brrrrito",
      image: "images/burrito.jpg",
      description:
        "Fed up with your current debts? We've got you covered. All green shit and eggs and cheese and green salsa. No substitutions.",
      price: 8,
    },
    {
      name: "They Cookies",
      image: "images/they.jpg",
      description:
        "Cis gendered beings not allowed. These anuenue allies are crumbly, to remind you to do your part to crumble the patriarchy.",
      price: 10,
    },
    {
      name: "Hat",
      image: "images/cathat.jpeg",
      description: "Headwear for the fashionablest beings",
      price: 24,
    },
    {
      name: "Comfy Swetter",
      image: "images/cat_sweat.jpeg",
      description: "Finest materials for you to be cozy",
      price: 30,
    },
    {
      name: "Ellegant Jammies",
      image: "images/frog_cat.png",
      description: "Procrastinate in style",
      price: 60,
    },
  ]);
};
