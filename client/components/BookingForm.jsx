import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ setBookingComplete }) => {
    const handleBookingComplete = () => {
        setBookingComplete(true);
    };

    const [bookDate, setBookDate] = useState("");
    const [leaveDate, setLeaveDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!bookDate || !leaveDate ) {
            alert("Please select all booking details.");
            return;
        }

        const currentDate = new Date();
        const selectedBookDateTime = new Date(`${bookDate}T00:00:00`);
        const selectedLeaveDateTime = new Date(`${leaveDate}T00:00:00`);

        // Check if booking time is in the past
        if (selectedBookDateTime < currentDate) {
            alert("Booking time cannot be in the past.");
            return;
        }

        // Check if booking time is after leaving time
        if (selectedBookDateTime >= selectedLeaveDateTime) {
            alert("Booking time must be before leaving time.");
            return;
        }

        // Handle successful form submission
        handleBookingComplete();
    };

    return (
        <div className="container">
            <div className="content">
                <div className="txt">Book now to see availability</div>
                <div className="form">
                    <div className="txt">
                        Select Date you would like to stay
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputData">
                            <input
                                type="date"
                                name="book-date"
                                min={new Date().toISOString().split("T")[0]}
                                id="book-date"
                                onChange={(e) => setBookDate(e.target.value)}
                            />
                        </div>
                        <div className="txt">
                            Select Date you would like to leave.
                        </div>
                        <div className="inputData">
                            <input
                                type="date"
                                name="leave-date"
                                min={bookDate}
                                id="leave-date"
                                onChange={(e) => setLeaveDate(e.target.value)}
                            />
                        </div>
                        <div className="book">
                            <button
                                id="book-reservation-btn"
                                type="submit"
                                onSubmit={handleSubmit}
                            >
                                Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;