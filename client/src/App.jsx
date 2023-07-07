import "./App.css";
import NoPage from "./pages/404";
import Checkout from "../components/Checkout";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import HotelDetails from "./pages/HotelDetails";

export default function App() {
    const [bookingComplete, setBookingComplete] = useState(false);

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home setBookingComplete={setBookingComplete} />
                        }
                    />
                    <Route path="/hotels/:hotelId" component={<HotelDetails />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
                <MobileNavbar />
            </BrowserRouter>
        </div>
    );
}
