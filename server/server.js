const express = require("express");
const db = require("./db/index");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const whitelist = ["https://la-reserve.vercel.app", "http://localhost:5173"];
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

app.post("/create-checkout-session", async (req, res) => {
    try {
        const { hotelId, amountOfDays } = req.body;

        const { rows } = await db.query(
            "SELECT name, price, description, image, price_id FROM hotel WHERE id = $1",
            [Number(hotelId)]
        );

        if (rows.length > 0) {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price: rows[0].price_id,
                        quantity: amountOfDays,
                    },
                ],
                mode: "payment",
                success_url: `${process.env.CURRENT_DOMAIN}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.CURRENT_DOMAIN}/checkout/canceled=true`,
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

app.get('/checkout/success', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const customer = await stripe.customers.retrieve(session.customer);
  
    res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
  });

app.listen(port, () => {
    console.log(`App is now running on port ${port} `);
});
