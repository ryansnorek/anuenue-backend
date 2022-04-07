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

router.get("/:id", async (req, res) => {
    try {
      const item = await getItemByID(req.params.id);
      res.json(item);
    } catch (err) {
      res.json(err);
    }
  });

module.exports = router;
