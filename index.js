// const { log } = require('console');
const express = require("express");
const port = process.env.PORT || 9000; // Use environment variable or default to 9000
const db = require("./config/mongoose");
const routes = require("./routes/product");
const app = express();

// middleware
app.use(express.json());

const routesPath = require("./routes");
app.get("*", (req, res) => {
  res.status(200).json({
    message: "Successfully used",
    success: true,
    error: false,
  });
});
// app.use("*", routes);
// app.use("/", routes);

// Server
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running Server ${err}`);
  }
  console.log(`Server is running ${port}`);
});
