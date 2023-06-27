import "./App.css";
import SignUpForm from "../components/SignUpForm";
import BookingForm from "../components/BookingForm";
import BookHotel from "../components/BookHotel";
import NoPage from "../components/NoPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
    const [signedUp, setSignedUp] = useState(false);
    const [bookingComplete, setBookingComplete] = useState(false);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {!signedUp ? (
                        <Route
                            path="/"
                            element={
                                <>
                                    <SignUpForm setSignedUp={setSignedUp} />
                                </>
                            }
                        />
                    ) : (
                        <>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <BookingForm
                                            setBookingComplete={
                                                setBookingComplete
                                            }
                                        />
                                        {bookingComplete ? (
                                            <Navigate to="/hotel" />
                                        ) : null}
                                    </>
                                }
                            />
                            <Route path="/hotel" element={<BookHotel />} />
                        </>
                    )}
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
