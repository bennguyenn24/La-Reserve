import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductSection.css";
import HotelCard from "./HotelCard";
import { data } from "../../data/hotels.json";
import "./ProductSection.css";

export default function ProductSection() {
    const [hotels, setHotels] = useState(data.hotels);
    console.log(hotels);
    // useEffect(() => {
    //     async function getHotelData() {
    //         try {
    //             const res = await axios.get("http://localhost:3000/hotels");
    //             setHotels(res.data.data);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     }
    //     getHotelData();
    // }, []);

    return (
        <section className="products-section">
            <header className="headers__container">
                <h1 className="header__h1">Discover Luxury</h1>
                <h2 className="header__h2">
                    Indulge in Exquisite Accommodations
                </h2>
            </header>

            <section className="products__container">
                {hotels.map((hotel) => (
                    <HotelCard
                        key={hotel.id}
                        id={hotel.id}
                        title={hotel.name}
                        image={hotel.image}
                        price={hotel.price}
                        description={hotel.description}
                        location={hotel.location}
                    />
                ))}
            </section>
        </section>
    );
}
