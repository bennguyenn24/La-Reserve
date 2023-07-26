import React from "react";

export default function SearchResults({ location }) {
    const { searchLocation, bookDate, leaveDate, adults, children } =
        location.state;
    return (
        <div>
            <h1>Search Results</h1>
            <p>Location: {searchLocation}</p>
            <p>Check-in Date: {bookDate}</p>
            <p>Check-out Date: {leaveDate}</p>
            <p>Number of Adults: {adults}</p>
            <p>Number of Children: {children}</p>
        </div>
    );
}
