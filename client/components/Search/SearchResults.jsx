import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HotelsContext } from "../../context/HotelsContext";
import HotelCard from "../Home/HotelCard";
import "./SearchResults.css";

const SearchResults = () => {
    const { location } = useParams();

    const hotels = useContext(HotelsContext);
    const hotelsFilteredByLocation = hotels.filter((hotel) =>
        hotel.location.toLowerCase().includes(location.toLowerCase())
    );

    const navigate = useNavigate();


    const handleGoBack = () => {
      navigate("/");
    }

    return (
        <div>
            {/* Ternary operator to conditionally render search results or "No Hotels Found" */}
            {hotelsFilteredByLocation.length === 0 ? (
                <div className="no-hotel-container">
                    <h1 className="header1">No Hotels Found in this area</h1>
                    <button onClick={handleGoBack}>Go Back</button>
                    </div>
            ) : (
                <>
                    <h1>Search Results</h1>
                    <p>Location: {location}</p>
                    <section className="products__container">
                        {hotelsFilteredByLocation.map((hotel) => (
                            <HotelCard
                                key={hotel.id}
                                title={hotel.title}
                                location={hotel.location}
                                image={hotel.image}
                                price={hotel.price}
                                description={hotel.description}
                            />
                        ))}
                    </section>
                </>
            )}
        </div>
    );
};
export default SearchResults;
