import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HotelsContext } from "../../context/HotelsContext";
import HotelCard from "../Home/HotelCard";

const SearchResults = () => {
    const { location } = useParams();

    const hotels = useContext(HotelsContext);
    const hotelsFilteredByLocation = hotels.filter((hotel) =>
        hotel.location.toLowerCase().includes(location.toLowerCase())
    );

    return (
        <div>
            <h1>Search Results</h1>
            <p>Location: {location}</p>
            <section className="products__container">
                {hotelsFilteredByLocation.map((hotel) => (
                    <HotelCard
                        id={hotel.id}
                        title={hotel.title}
                        location={hotel.location}
                        image={hotel.image}
                        price={hotel.price}
                        description={hotel.description}
                    />
                ))}
            </section>
        </div>
    );
};

export default SearchResults;
