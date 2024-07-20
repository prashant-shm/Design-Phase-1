import React from 'react';
import "./Footer.css";
import Shmooz from "../../assets/images/Shmooz-Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-data">                <div className="footer-logo">
                    <img src={Shmooz} alt="Shmooz Logo" className="footer-logo-image" />
                </div>
                    <div className="footer-links">
                        <div className="footer-links-header">
                            <h4>Users</h4>
                        </div>
                        <div className="footer-links-list">
                            <ul className="footer-links-items">
                                <li>
                                    <a href="#">Events</a>
                                </li>
                                <li>
                                    <a href="#">Venues</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-links-header">
                            <h4>Organizers</h4>
                        </div>
                        <div className="footer-links-list">
                            <ul className="footer-links-items">
                                <li>
                                    <a href="#">List Your Events</a>
                                </li>
                                <li>
                                    <a href="#">My Event List</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-links-header">
                            <h4>Venues</h4>
                        </div>
                        <div className="footer-links-list">
                            <ul className="footer-links-items">
                                <li>
                                    <a href="#">Get Listed</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-links-header">
                            <h4>Company</h4>
                        </div>
                        <div className="footer-links-list">
                            <ul className="footer-links-items">
                                <li>
                                    <a href="#" >Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Cookie Policy</a>
                                </li>
                                <li>
                                    <a href="#">Refund Policy</a>
                                </li>
                                <li>
                                    <a href="#">Terms & Condition</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-links-header">
                            <h4>Social Media</h4>
                        </div>
                        <div className="footer-links-list">
                            <ul className="footer-links-items">
                                <li className="footer-link-item social">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} className='icon' />
                                    </a>
                                    <p className='para'>Instagram</p>
                                </li>
                                <li className="footer-link-item social">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faLinkedin} className='icon' />
                                    </a>
                                    <p className='para'>Linkedin</p>
                                </li>
                                <li className="footer-link-item social">
                                    <a href="#"><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
                                    <p className='para'>Facebook</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2024 Shmooz. All Rights Reserved</p>
                </div>

            </footer>
        </>
    )
}

export default Footer;
