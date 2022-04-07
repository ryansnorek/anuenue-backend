const router = require("express").Router();
const { getAllItems, getItemByID, updateItem } = require("../model");

router.get("/", async (req, res) => {
  try {
    const items = await getAllItems();
    res.json(items);
  } catch (err) {
    res.json(err);
  }
});

// router.get("/", async (req, res) => {
//     try {
//       const items = await getAllItems();
//       res.json(items);
//     } catch (err) {
//       res.json(err);
//     }
//   });

module.exports = router;
