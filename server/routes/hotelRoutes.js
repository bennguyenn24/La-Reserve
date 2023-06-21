const express = require("express");
const { getAllHotels } = require("../controllers/hotelControllers");
const router = express.Router();

router.get("/", getAllHotels);

module.exports = router;