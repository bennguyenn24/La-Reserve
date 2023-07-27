import React, { useState } from "react";
import SearchForm from "./SearchForm";
import "./HeroSection.css";

export default function HeroSection() {
    const [location, setLocation] = useState("");
    const [showResults, setShowResults] = useState(false)

    const handleSearch = (locationValue) => {
        setLocation(locationValue);
        setShowResults(true);
    }

    return (
        <section className="hero__container">
            {showResults ? ( 
        <SearchResults location={location} />
      ) : (
        <SearchForm onSearch={handleSearch} />
      )}
            <div className="image__container">
                <img src="../../assets/HERO.jpg" alt="Vacation resort" />
            </div>
        </section>
    );
}
