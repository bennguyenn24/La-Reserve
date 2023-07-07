import React from "react";
import HeroSection from "../../components/Home/HeroSection";
import ProductSection from "../../components/Home/ProductSection";
import Navbar from "../../components/Navbar.jsx";
import MobileNavbar from "../../components/MobileNavbar.jsx";

export default function Home({ setBookingComplete }) {
    return (
        <main>
            <Navbar />
            <HeroSection setBookingComplete={setBookingComplete} />
            <ProductSection />
            <MobileNavbar />
        </main>
    );
}
