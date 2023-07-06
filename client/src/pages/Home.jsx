import React from "react";
import HeroSection from "../../components/Home/HeroSection";

export default function Home({setBookingComplete}) {
    return (
        <main>
            <HeroSection setBookingComplete={setBookingComplete}/>
        </main>
    );
}
