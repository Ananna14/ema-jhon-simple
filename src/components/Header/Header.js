import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <h2>This is header</h2>
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;