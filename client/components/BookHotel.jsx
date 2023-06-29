import React, { useEffect, useState } from "react";
import "./BookHotel.css";
import HotelCard from "./HotelCard";
import axios from "axios";

const BookHotel = () => {
    const [hotels, setHotels] = useState([]);
    const handleSubmit = () => {
        alert("Your request has been submitted");
    };

    useEffect(() => {
        async function getHotelData() {
            try {
                const res = await axios.get("http://localhost:3000/hotels");
                setHotels(res.data.data);
            } catch (err) {
                console.error(err);
            }
        }
        getHotelData();
    }, []);

    return (
        <div className="hotel-container">
            <h2 className="container-title">Discover Luxurious Hotels</h2>
            <div className="product-cards">
                {hotels.map((hotel) => (
                    <HotelCard
                        title={hotel.name}
                        image={hotel.image}
                        price={hotel.price}
                        description={hotel.description}
                        link
                    />
                ))}
            </div>
        </div>
    );
};

export default BookHotel;
