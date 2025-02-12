import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a Header.css for specific styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Astop</Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;