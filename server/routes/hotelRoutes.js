const express = require("express");
const {
  getAllHotels,
  getHotelById,
} = require("../controllers/hotelControllers");
const router = express.Router();

router.get("/", getAllHotels);
router.get("/:hotelId", getHotelById);

module.exports = router;
