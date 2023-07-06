import React from "react";
import BookingForm from "./BookingForm";
import "./HeroSection.css";

export default function HeroSection({setBookingComplete}) {
    return (
        <section className="hero__container">
            <BookingForm setBookingComplete={setBookingComplete}/>
            <div className="image__container">
                <img src="../../assets/HERO.jpg" />
            </div>
        </section>
    );
}
