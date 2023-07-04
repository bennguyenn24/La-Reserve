const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Hello Mate");
});

// Handle Bookings
app.post("/bookings", (req, res) => {
    const { userEmail, bookDate, leaveDate } = req.body;
    const query = INSERT INTO bookings(userEmail, bookDate, leaveDate)
    VALUES ($1, $2, $3)) 
})

// Routes
app.use("/hotels", require("./routes/hotelRoutes"));

app.listen(port, () => {
    console.log(`App is now running on port ${port} `);
});
