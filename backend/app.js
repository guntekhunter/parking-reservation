const express = require("express");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());

dotenv.config();

const port = process.env.PORT;

// import controller
const userController = require("./src/user/user.controller");
const parkingController = require("./src/parking/parking.controller");
const parkingPlaceController = require("./src/parking-place/parking-place.controller");
const reservationController = require("./src/reservation/reservation.controller");
const paymentController = require("./src/payment/payment.controller");

//routes
app.use("/users", userController);
app.use("/parking", parkingController);
app.use("/parking-place", parkingPlaceController);
app.use("/reservation", reservationController);
app.use("/payment", paymentController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
