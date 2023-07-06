import React from "react";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import { Plane } from "lucide-react";
import { User } from "lucide-react";
import "./MobileNavbar.css";

export default function MobileNavbar() {
    return (
        <nav className="mobile-navbar">
            <Link to="/support" className="link__container">
                <HelpCircle />
                <span>Support</span>
            </Link>
            <Link to="/trips" className="link__container">
                <Plane />
                <span>Trips</span>
            </Link>
            <Link to="sign-in" className="link__container">
                <User />
                <span>Sign in</span>
            </Link>
        </nav>
    );
}
