// const { log } = require('console');
const express = require("express");
const port = process.env.PORT || 9000; // Use environment variable or default to 9000
const db = require("./config/mongoose");
const app = express();

// middleware
app.use(express.json());

// const routesPath = require('./routes');
app.get("*", (req, res) => {
  res.status(200).json({
    message: "Successfully requested",
    success: true,
    error: false,
  });
});
app.use("/", require("./routes"));

// Server
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running Server ${err}`);
  }
  console.log(`Server is running ${port}`);
});
