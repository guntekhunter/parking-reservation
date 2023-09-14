const express = require("express");
const { getAllParking } = require("./parking.services");
const { postParkingSpots } = require("./parking.services");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const parking = await getAllParking();
    res.send(parking);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const newPrkingSpots = req.body;
    const parkingSpots = await postParkingSpots(newPrkingSpots);
    res.send(parkingSpots);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
