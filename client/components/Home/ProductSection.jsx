import { useContext } from "react";
import "./ProductSection.css";
import HotelCard from "./HotelCard";
import "./ProductSection.css";
import { HotelsContext } from "../../context/HotelsContext";

export default function ProductSection() {
    const hotels = useContext(HotelsContext);

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
