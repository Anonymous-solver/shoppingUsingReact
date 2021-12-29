import React from 'react';
import logo from "../../logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className = "header">
            <img src={logo} alt="null" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;