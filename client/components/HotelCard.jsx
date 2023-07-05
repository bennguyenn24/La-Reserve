import React from "react";
import "./BookHotel.css";

const HotelCard = ({ title, image, price, description, onButtonClick }) => {
    const handleBookNow = () => {
        onButtonClick();
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">${price} per night </p>
                <p className="description">{description}</p>
            </div>
            <button className="book-now-button" onClick={handleBookNow}>
                Book Now
            </button>
        </div>
    );
};

export default HotelCard;
