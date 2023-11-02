const db = require("../db/index");

async function getAllHotels(req, res) {
  const { rows } = await db.query("SELECT * from hotel ORDER BY name ASC");

  res.json({
    data: rows,
  });
}

async function getHotelById(req, res) {
  const { hotelId } = req.params;

  const { rows } = await db.query("SELECT * from hotel WHERE id = $1", [
    Number(hotelId),
  ]);

  res.json({
    data: rows[0],
  });
}

module.exports = { getAllHotels, getHotelById };
