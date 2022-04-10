const router = require("express").Router();
const { upload } = require("../middleware");
const {
  getAllItems,
  getItemByID,
  updateItem,
  updateImage,
} = require("../model");

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

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await updateItem(id, req.body);
    res.json(updatedItem);
  } catch (err) {
    res.json(err);
  }
});

router.post("/single/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const image = { pic: req.file.filename };
    const updatedItem = await updateImage(id, image);
    res.json(updatedItem);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post("/pepe", (req, res) => {
  res.json(true)
  // const { pass } = req.body;
  // try {
  //   const passcode = process.env.PASSCODE;
  //   res.json(passcode === pass);
  // } catch (err) {
  //   res.json(err);
  // }
});

module.exports = router;
