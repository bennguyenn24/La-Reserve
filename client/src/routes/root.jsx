import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar.jsx";
import MobileNavbar from "../../components/MobileNavbar.jsx";
import { Outlet } from "react-router-dom";
import { HotelsContext } from "../../context/HotelsContext.jsx";
import axios from "axios";

export default function Root() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        async function getHotelsData() {
            try {
                const res = await axios.get("https://la-reserve-server.onrender.com/hotels");
                setHotels(res.data.data);
            } catch (err) {
                console.error(err);
            }
        }
        getHotelsData();
    }, []);

    return (
        <main>
            <HotelsContext.Provider value={hotels}> 
                <Navbar />
                <Outlet />
                <MobileNavbar />
            </HotelsContext.Provider>
        </main>
    );
}
