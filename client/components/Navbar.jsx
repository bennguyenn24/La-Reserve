import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/la-reserve-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar__container">
            <Link to="" className="logo__container">
                <img src={Logo}/>
            </Link>
            <ul className="links__container">
                <li>
                    <Link to="support">Support</Link>
                </li>
                <li>
                    <Link to="trips">Trips</Link>
                </li>
                <li>
                    <Link to="sign-in">Sign in</Link>
                </li>
            </ul>
        </nav>
    );
}
