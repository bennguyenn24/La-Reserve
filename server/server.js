const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Hello Mate')
})

// Routes
app.use("/hotels", require("./routes/hotelRoutes"));

app.listen(port, () => {
    console.log(`App is now running on port ${port} `)
})