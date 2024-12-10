// const { log } = require('console');
const express = require("express");
const productController = require("./controller/product_controller");
const db = require("./config/mongoose");
const routes = require("./routes/product");
const app = express();
require("dotenv").config();

// middleware
app.use(express.json());

app.use("/", routes);

// Server
const port = process.env.PORT || 9000; // Use environment variable or default to 9000
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running Server ${err}`);
  }
  console.log(`Server is running ${port}`);
});
