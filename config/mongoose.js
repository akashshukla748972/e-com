const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// creating connection with database
mongoose
  .connect(process.env.DBHOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => {
    console.log(process.env.DBHOST);
    console.error(`Error in Conneting to the Database : ${err}`);
    process.exit(1); // Exit the Process if the database connection fails
  });
