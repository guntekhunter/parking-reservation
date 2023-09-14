const express = require("express");
const { getAllParking } = require("./parking.services");
const { getOneParking } = require("./parking.services");
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
router.get("/:id", async (req, res) => {
  try {
    const parking_id = parseInt(req.params.id);
    const parking = await getOneParking(parking_id);
    res.send(parking);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
router.post("/", async (req, res) => {
  try {
    const newParkingSpots = req.body;
    const parkingSpots = await postParkingSpots(newParkingSpots);
    res.send(parkingSpots);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
