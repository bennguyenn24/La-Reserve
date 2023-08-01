import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./SearchForm.css";

const SearchForm = () => {
    const navigate = useNavigate();

    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        
    if (!location.trim()) {
        // Show a message or perform any action for invalid form submission
        alert("Please fill out the location field.");
        return;
      }

        navigate(`/search/${encodeURIComponent(location)}`);
    };

    return (
        <div className="search-form__container">
            <div className="content">
                <h1 className="header__h1">Luxury Vacation Resorts</h1>
                <h2 className="header__h2">
                    Book elegant vacation resorts, hotels, and more on La
                    Reserve.
                </h2>

                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="input__container">
                        <label htmlFor="location" className="text-xs font-bold">
                            LOCATION
                        </label>
                        <input
                            onChange={(e) => setLocation(e.target.value)}
                            id="location"
                            name="location"
                            type="text"
                            value={location}
                            placeholder="Anywhere"
                        />
                    </div>

                    <button
                        id="book-reservation-btn"
                        className="book-reservation-btn"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;
