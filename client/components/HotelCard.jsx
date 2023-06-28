import React from "react";

const HotelCard = ({ title, image, price, description, link }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">${price}</p>
                <p className="description">{description}</p>
            </div>
            <a href="#" className="book-now-button">
                Book Now
            </a>
        </div>
    );
};

export default HotelCard;
