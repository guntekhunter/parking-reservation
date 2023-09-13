const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const port = process.env.PORT;

// import controller
const userController = require("./src/user/user.controller");

//routes
app.use("/users", userController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
