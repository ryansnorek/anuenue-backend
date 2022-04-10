require("dotenv").config();
const port = process.env.PORT || 8000;
const express = require("express");
const app = express();

const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const stripeRouter = require("./routes/stripe-router");
const storeRouter = require("./routes/store-router");

app.use(express.static("public"));
app.use(express.static("images"));
// app.use(express.static(path.join(__dirname, "../client")));
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://anuenue.netlify.app"],
    methods: ["OPTIONS", "POST", "GET", "PUT"],
  })
);

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
