import "./App.css";
import SignUpForm from "../components/SignUpForm";
import BookingForm from "../components/BookingForm";
import BookHotel from "../components/BookHotel";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    const [signedUp, setSignedUp] = useState(false);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookHotel />}>
                        <BookHotel />
                        {!signedUp ? (
                            <SignUpForm setSignedUp={setSignedUp} />
                        ) : ( 
                            <BookingForm />
                        )}
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
