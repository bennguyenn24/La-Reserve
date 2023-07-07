import React from "react";
import Navbar from "../../components/Navbar.jsx";
import MobileNavbar from "../../components/MobileNavbar.jsx";
import { Outlet } from "react-router-dom";

export default function Root({ setBookingComplete }) {
    return (
        <main>
            <Navbar />
            <Outlet />
            <MobileNavbar />
        </main>
    );
}
