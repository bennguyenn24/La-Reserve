const db = require("../db/index");

async function getAllHotels(req, res) {
    const { rows } = await db.query("SELECT * from hotel ORDER BY name ASC");

    res.json({
        data: rows
    });
}

module.exports = {getAllHotels}