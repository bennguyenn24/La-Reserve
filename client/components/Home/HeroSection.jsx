import React from "react";
import BookingForm from "./BookingForm";
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <section className="hero__container">
            <BookingForm />
            <div className="image__container">
                <img src="../../assets/HERO.jpg" />
            </div>
        </section>
    );
}
