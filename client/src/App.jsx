import "./App.css";
import BookHotel from "../components/BookHotel";
import NoPage from "./pages/404";
import Checkout from "../components/Checkout";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
    const [bookingComplete, setBookingComplete] = useState(false);
console.log(bookingComplete)

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home setBookingComplete={setBookingComplete} />
                        }
                    />
                    {bookingComplete && (
                        <Route path="/hotels" element={<BookHotel />} />
                    )}
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
