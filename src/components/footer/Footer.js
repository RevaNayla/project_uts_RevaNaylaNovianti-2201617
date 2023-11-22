import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__title">
                <h1 className="footer__title">Reva</h1>

                <ul className="footer__list">
                    <li>
                        <Link to="/about" className="footer__link">About</Link>
                    </li>

                    <li>
                        <Link to="/biodata" className="footer__link">Biodata</Link>
                    </li>

                    <li>
                        <Link to="/contact" className="footer__link">Contact</Link>
                    </li>
                </ul>

                <div className="footer__sosial">
                    <a href="https://www.facebook.com/" className="footer__sosial-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.instagram.com/" className="footer__sosial-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com/" className="footer__sosial-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
 
                </div>

                <span className="footer__copy">&#169; Reva Nayla Novianti. All rigths reserved</span>
            </div>
        </footer>
    )
    
}

export default Footer;