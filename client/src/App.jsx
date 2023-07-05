import "./App.css";
import BookHotel from "./pages/404";
import NoPage from "./pages/404";
import Checkout from "../components/Checkout";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
    const [signedUp, setSignedUp] = useState(false);
    const [bookingComplete, setBookingComplete] = useState(false);
    const [cart, setCart] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
