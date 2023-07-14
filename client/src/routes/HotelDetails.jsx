import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { useNavigation } from "react-router-dom";
import "../../components/Hotels/HotelDetails.css";
// Get Data
import { data } from "../../data/hotels.json";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function HotelDetails() {
    const [bookDate, setBookDate] = useState("");
    const [leaveDate, setLeaveDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const navigate = useNavigate();

    const hotels = data.hotels;
    const { hotelId } = useParams();
    const currentHotel = hotels.filter(
        (hotel) => hotel.id === Number(hotelId)
    )[0];

    const handleCheckout = async () => {
        const res = await axios.post("http://localhost:3000/create-checkout-session")
        if (res.status === 200) {
            console.log(res.data)
        }
    }

    return (
        <section className="px-10 py-2">
            <section className="reservation-form__container">
                <div className="image__container">
                    <img src={currentHotel.image} alt={currentHotel.name} />
                </div>
                <form className="form" action="http://localhost:3000/create-checkout-session" method="POST">
                    <h1 className="header__h1">{currentHotel.name}</h1>
                    <h2 className="header__h2">{currentHotel.location}</h2>
                    <h3>${currentHotel.price}</h3>
                    <div className="dates__container">
                        <div className="input__container">
                            <label
                                htmlFor="book-date"
                                className="text-xs font-bold"
                            >
                                CHECK IN
                            </label>
                            <input
                                type="date"
                                name="book-date"
                                min={new Date().toISOString().split("T")[0]}
                                id="book-date"
                                onChange={(e) => setBookDate(e.target.value)}
                                value={bookDate}
                            />
                        </div>
                        <div className="input__container">
                            <label
                                htmlFor="leave-date"
                                className="text-xs font-bold"
                            >
                                CHECK OUT
                            </label>
                            <input
                                type="date"
                                name="leave-date"
                                min={bookDate}
                                id="leave-date"
                                onChange={(e) => setLeaveDate(e.target.value)}
                                value={leaveDate}
                            />
                        </div>
                    </div>

                    <div className="people__container">
                        <div className="input__container">
                            <label
                                htmlFor="adults"
                                className="text-xs font-bold"
                            >
                                ADULTS
                            </label>
                            <select
                                onChange={(e) =>
                                    setAdults(Number(e.target.value))
                                }
                                name="adults"
                                id="adults"
                                value={adults}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                            </select>
                        </div>
                        <div className="input__container">
                            <label
                                htmlFor="children"
                                className="text-xs font-bold"
                            >
                                CHILDREN
                            </label>
                            <select
                                onChange={(e) =>
                                    setChildren(Number(e.target.value))
                                }
                                name="children"
                                id="children"
                                value={children}
                            >
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </select>
                        </div>
                    </div>

                    <button
                        id="book-reservation-btn"
                        className="book-reservation-btn"
                        type="submit"
                        
                    >
                        Reserve
                    </button>
                </form>
            </section>
        </section>
    );
}
