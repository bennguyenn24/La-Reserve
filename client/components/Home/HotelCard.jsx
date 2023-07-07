import React from "react";
import "./HotelCard.css";
import { Link } from "react-router-dom";

const HotelCard = ({ id, title, image, price, description, location }) => {
    return (
        <Link to={`hotel/${id}`} className="product-card">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-location">{location}</p>
                <p className="product-description">{description}</p>
                <p className="product-price">${price} night </p>
            </div>
        </Link>
    );
};

export default HotelCard;
