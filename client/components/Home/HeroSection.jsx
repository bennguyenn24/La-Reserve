import React from "react";
import SearchForm from "./SearchForm";
import "./HeroSection.css";

export default function HeroSection({setBookingComplete}) {
    return (
        <section className="hero__container">
            <SearchForm setBookingComplete={setBookingComplete}/>
            <div className="image__container">
                <img src="../../assets/HERO.jpg" />
            </div>
        </section>
    );
}
