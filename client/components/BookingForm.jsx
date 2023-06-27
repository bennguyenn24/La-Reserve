import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ setBookingComplete }) => {
    const handleBookingComplete = () => {
        setBookingComplete(true);
    };

    const [bookDate, setBookDate] = useState("");
    const [bookTime, setBookTime] = useState("");
    const [leaveDate, setLeaveDate] = useState("");
    const [leaveTime, setLeaveTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!bookDate || !bookTime || !leaveDate || !leaveTime) {
            alert("Please select all booking details.");
            return;
        }

        const currentDate = new Date();
        const selectedBookDateTime = new Date(`${bookDate} ${bookTime}`);
        const selectedLeaveDateTime = new Date(`${leaveDate} ${leaveTime}`);

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
                <div className="txt">Book Now</div>
                <div className="form">
                    <div className="txt">
                        Select Date & Time you would like to stay
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputData">
                            <input
                                type="date"
                                name="book-date"
                                id="book-date"
                                onChange={(e) => setBookDate(e.target.value)}
                            />
                        </div>
                        <div className="inputData">
                            <input
                                type="time"
                                name="book-time"
                                id="book-time"
                                onChange={(e) => setBookTime(e.target.value)}
                            />
                        </div>
                        <div className="txt">
                            Select Date & Time you would like to leave.
                        </div>
                        <div className="inputData">
                            <input
                                type="date"
                                name="leave-date"
                                id="leave-date"
                                onChange={(e) => setLeaveDate(e.target.value)}
                            />
                        </div>
                        <div className="inputData">
                            <input
                                type="time"
                                name="leave-time"
                                id="leave-time"
                                onChange={(e) => setLeaveTime(e.target.value)}
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