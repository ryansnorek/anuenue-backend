require("dotenv").config();
const port = process.env.PORT || 8000;
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("images"));

const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const stripeRouter = require("./routes/stripe-router");
const storeRouter = require("./routes/store-router");

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   cors({ origin: ["http://localhost:3000", "https://anuenue.netlify.app"] })
// );
app.use(cors());
app.use("/stripe", stripeRouter);
app.use("/store", storeRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
