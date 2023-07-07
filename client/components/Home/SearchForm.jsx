import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
    const [location, setLocation] = useState("");
    const [bookDate, setBookDate] = useState("");
    const [leaveDate, setLeaveDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form inputs
        if (!bookDate || !leaveDate || !location) {
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
        <div className="search-form__container">
            <div className="content">
                <h1 className="header__h1">Luxury Vacation Resorts</h1>
                <h2 className="header__h2">
                    Book elegant vacation resorts, hotels, and more on La
                    Reserve.
                </h2>

                <form className="search-form" onSubmit={handleSubmit}>
                    <div className="input__container">
                        <label htmlFor="location" className="text-xs font-bold">
                            LOCATION
                        </label>
                        <input
                            onChange={(e) => setLocation(e.target.value)}
                            id="location"
                            name="location"
                            type="text"
                            value={location}
                            placeholder="Anywhere"
                        />
                    </div>
                    <div className="dates__container">
                        <div className="input__container">
                            <label
                                htmlFor="book-date"
                                className="text-xs font-bold"
                            >
                                CHECK IN
                            </label>
                            <input
                                type="date"
                                name="book-date"
                                min={new Date().toISOString().split("T")[0]}
                                id="book-date"
                                onChange={(e) => setBookDate(e.target.value)}
                            />
                        </div>
                        <div className="input__container">
                            <label
                                htmlFor="leave-date"
                                className="text-xs font-bold"
                            >
                                CHECK OUT
                            </label>
                            <input
                                type="date"
                                name="leave-date"
                                min={bookDate}
                                id="leave-date"
                                onChange={(e) => setLeaveDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="people__container">
                        <div className="input__container">
                            <label
                                htmlFor="adults"
                                className="text-xs font-bold"
                            >
                                ADULTS
                            </label>
                            <select
                                onChange={(e) =>
                                    setAdults(Number(e.target.value))
                                }
                                name="adults"
                                id="adults"
                                value={adults}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                            </select>
                        </div>
                        <div className="input__container">
                            <label
                                htmlFor="children"
                                className="text-xs font-bold"
                            >
                                CHILDREN
                            </label>
                            <select
                                onChange={(e) =>
                                    setChildren(Number(e.target.value))
                                }
                                name="children"
                                id="children"
                                value={children}
                            >
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </select>
                        </div>
                    </div>

                    <button
                        id="book-reservation-btn"
                        className="book-reservation-btn"
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;
