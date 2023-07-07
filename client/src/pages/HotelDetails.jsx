import React from "react";
import { useParams } from "react-router-dom";

export default function HotelDetails() {
    const { hotelId } = useParams();
    console.log(hotelId)
    return <main>
        <div>{hotelId}</div>
    </main>;
}
