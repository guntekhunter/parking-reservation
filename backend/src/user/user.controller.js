const express = require("express");
const prisma = require("../db/index");
const getAllUser = require("./user.services");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUser();
    res.send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
