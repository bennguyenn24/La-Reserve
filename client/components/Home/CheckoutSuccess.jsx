import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const CheckoutSuccess = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [sessionInfo, setSessionInfo] = useState({
        amount: "",
        customer: "",
        status: "",
    });

    // You can now access the individual query parameters using the get() method of URLSearchParams
    const sessionId = searchParams.get("session_id");

    // Fetch session info
    useEffect(() => {
        async function getSessionInfo() {
            const res = await axios.get(
                `https://la-reserve-server.onrender.com/order?session_id=${sessionId}`
            );
            setSessionInfo(res.data.sessionInfo)
        }

        getSessionInfo();
    }, []);

    return (
        <div>
            Checkout success
            <p>Confirmation ID: {sessionId}</p>
            <p>Customer: {sessionInfo.customer}</p>
            <p>Amount: {sessionInfo.amount}</p>
            <p>Status: {sessionInfo.status}</p>
        </div>
    );
};

export default CheckoutSuccess;
