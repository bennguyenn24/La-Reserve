import React from "react";
import "./BookHotel.css";
import DSRhotel from '../assets/DSRhotel.jpg'
import GCPhotel from '../assets/GCPhotel.jpg'
import PHThotel from '../assets/PHThotel.jpg'

const BookHotel = () => {

    const handleSubmit = () => {
        alert('Your request has been submitted')
    }

    return (
        <div className="box">
            <div className="content">
                <div className="text">Find the best hotel available</div>
                <div className="hotels">
                    <div className="card">
                        <div className="hotel1"><h1>The Grand Celestial Palace</h1></div>
                        <div className="hotel-image">
                            <img src={GCPhotel} alt="hotel1" />
                        </div>
                        <div className="price">Price: $10,000 per night</div>
                        <div className="description">
                            Description: Nestled amidst lush mountains, this
                            opulent retreat offers breathtaking views, a private
                            helipad, an infinity pool, and personalized butler
                            service.
                        </div>
                    </div>
                    <div className="card">
                    <div className="hotel2"><h1>The Diamond Sands Resort & Spa</h1></div>
                        <div className="hotel-image">
                            <img src={DSRhotel} alt="hotel2" />
                        </div>
                        <div className="price">Price: $7,500 per night</div>
                        <div className="description">
                            Description: Indulge in the ultimate beachfront
                            experience at this lavish resort, boasting private
                            cabanas, a world-class spa, gourmet dining, and a
                            private yacht for exploration.
                        </div>
                    </div>
                    <div className="card">
                    <div className="hotel3"><h1>The Platinum Heights Tower</h1></div>
                        <div className="hotel-image">
                            <img src={PHThotel} alt="hotel3" />
                        </div>
                        <div className="price">Price: $8,000 per night</div>
                        <div className="description">
                            Description: Ascend to the epitome of urban elegance
                            in this sleek skyscraper. Enjoy panoramic city
                            views, a penthouse suite with a personal chef, a
                            rooftop infinity pool, and exclusive access to a
                            private club.
                        </div>
                    </div>
                    </div>
                    <div className="request">
                        <button onSubmit={handleSubmit}>Request Booking</button>
                </div>
            </div>
        </div>
    );
};

export default BookHotel;
