import React, {useState} from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {


     /*======== Toggle Menu ========*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    
    return ( 
        <header className="header">
            <nav className="nav container">
                <Link className="nav__logo">Reva</Link>

                <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                    <ul className="nav__list grid">

                    <li><Link to="/home" > Home </Link></li>

                    <li><Link to="/about" > About </Link></li>

                    <li><Link to="/biodata" > Biodata </Link></li>

                    <li><Link to="/contact" > Contact </Link></li>
                    </ul>

                    <i class="uil uil-times nav__close"  onClick={() => showMenu (!Toggle)}></i>

                </div>

                <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
      

}

export default Header;