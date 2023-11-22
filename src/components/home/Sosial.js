import { Link } from "react-router-dom";
import React from "react";

const Sosial = () => {
    return (
        <div className="home__sosial">
            <Link to="https://instagram.com/" className="home__sosial-icon" target="_blank">
            <i class="uil uil-instagram"></i>
            </Link>
            <Link to="https://twitter.com/" className="home__sosial-icon" target="_blank">
            <i class="uil uil-twitter-alt"></i>
            </Link>
            <Link to="https://github.com/" className="home__sosial-icon" target="_blank">
            <i class="uil uil-github-alt"></i>
            </Link>
        </div>
    )
}

export default Sosial;