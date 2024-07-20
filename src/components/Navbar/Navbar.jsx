import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Shmooz from "../../assets/images/Shmooz-Logo.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={Shmooz} alt="Shmooz Logo" className="logo-image" />
                </div>
                <div className="navbar-menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#!" className="menu-link">Events</a>
                        </li>
                        <li className="menu-item">
                            <a href="#!" className="menu-link">Venues</a>
                        </li>
                        <li className="menu-item">
                            <a href="#!" className="menu-link">List Your Events</a>
                        </li>
                        <li className="menu-item">
                            <a href="#!" className="menu-link">For Business</a>
                        </li>
                        <li className="menu-item icons">
                            <FontAwesomeIcon icon={faCircleUser} className=' user-icon-1'/>
                            <FontAwesomeIcon icon={faChevronDown} className='user-icon-2' />
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggle">
                    <a href="#!" className="toggle-icon">
                        <FontAwesomeIcon icon={faBars} />
                    </a>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;
