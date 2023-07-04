const express = require("express");
const db = require("./db/index");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Mate");
});

// Handle Bookings
app.post("/bookings", async (req, res) => {
    const { userEmail, bookDate, leaveDate } = req.body;
    const { rows } = await db.query(
        "INSERT INTO bookings(email, price, created, book_date, leave_date) VALUES ($1, $2, DEFAULT, $3, $4) RETURNING *",
        [userEmail, 10000, bookDate, leaveDate]
    );

    res.json({ success: true, data: rows[0] });
});
// Routes
app.use("/hotels", require("./routes/hotelRoutes"));

app.listen(port, () => {
    console.log(`App is now running on port ${port} `);
});
