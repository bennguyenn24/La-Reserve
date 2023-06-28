const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello Mate");
});

// Routes
app.use("/hotels", require("./routes/hotelRoutes"));

app.listen(port, () => {
    console.log(`App is now running on port ${port} `);
});
