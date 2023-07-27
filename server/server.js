const express = require("express");
const db = require("./db/index");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY);

const whitelist = ["https://la-reserve.vercel.app", "http://localhost:3000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
var cors = require("cors");
const port = 3000;

app.use(cors(corsOptions));
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
// Need to pull and fetch data from the selected hotel
// create checkout session
// fetch hotel information

app.post("/create-checkout-session", async (req, res) => {
    try {
        const { hotelId } = req.body;

        const { rows } = await db.query(
            "SELECT name, price, description, image, price_id FROM hotel WHERE id = $1",
            [Number(hotelId)]
        );

        if (rows.length > 0) {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: rows[0].price_id,
                        quantity: 1,
                    },
                ],
                mode: "payment",
                success_url: `${process.env.CURRENT_DOMAIN}?success=true`,
                cancel_url: `${process.env.CURRENT_DOMAIN}?canceled=true`,
            });

            res.json({ session });
        } else {
            res.status(404).json({
                success: false,
                message: "Hotel not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
    console.log(`App is now running on port ${port} `);
});
