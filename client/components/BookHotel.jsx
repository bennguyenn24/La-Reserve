import React, { useEffect, useState } from "react";
import "./BookHotel.css";
import HotelCard from "./Home/HotelCard";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const BookHotel = () => {
    const [hotels, setHotels] = useState([]);
    const navigate = useNavigate();
    const handleBookNow = () => {
        navigate("/checkout")
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
                        onButtonClick={handleBookNow}
                    />
                ))}
            </div>
        </div>
    );
};

export default BookHotel;
