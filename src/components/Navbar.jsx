import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for active link styling

function Navbar() {
    // State to manage the visibility of the nav links
    const [isNavVisible, setIsNavVisible] = useState(false);

    // Toggle function to show/hide nav links
    function toggleNavbar() {
        setIsNavVisible(prevState => !prevState); // Toggle the state
    }

    return (
        <div className='navbar-main'>
            <div className='logo-div'>
                <img src='assets/logo (2).png' alt="Logo" />
            </div>
            <h5 className='navbar-h5'>JAY GOGA TOUR <br /> & TRAVELS</h5>
            <div className={`navlink ${isNavVisible ? 'show' : ''}`}>
                {/* Using NavLink to automatically add active class to the active link */}
                <NavLink to="/" activeClassName="active">ABOUT</NavLink>
                <NavLink to="/services" activeClassName="active">SERVICES</NavLink>
                <NavLink to="/contact" activeClassName="active">CONTACT</NavLink>
            </div>
            <button className='navbar-toggle' onClick={toggleNavbar}>☰</button>
        </div>
    );
}

export default Navbar;
