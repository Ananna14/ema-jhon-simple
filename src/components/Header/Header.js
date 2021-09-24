import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h2>This is header</h2>
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/management">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;