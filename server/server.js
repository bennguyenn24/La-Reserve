const express = require("express");
const db = require("./db/index");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = "http://localhost:3000";

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

// Stripe
app.post("/create-checkout-session", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: "price_1NV0NFCA7YJyiVj9Et8l5LlX",
                quantity: 1,
            },
            {
              price: "price_1 NUzqDCA7YJyiVj9AwMQLVLy",
                quantity: 1,
            },
            {
              price: "price_1NUzylCA7YJyiVj9ZDdlfLYz",
                quantity: 1,
            }
        ],
        mode: "payment",
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
});

app.listen(port, () => {
    console.log(`App is now running on port ${port} `);
});
