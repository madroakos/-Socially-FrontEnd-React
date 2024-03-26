import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
const Header = () => (
        <>
            <header>
                <Link to={`/home`} id='logoHref'><div className="logo">
                        <img src="/logo.png" alt="Logo" id="headerLogo"/>
                        <p id="logoLabel">ocially</p>
                </div></Link>
                <SearchBar/>
                <nav className="menu">
                    <ul>
                        <Link to={`/home`}><li><img className="icons" src="/home.png" alt="Home"/></li></Link>
                        <Link to={`/logout`}><li><img className="icons" src="/exit.png" alt="Logout" onClick={logout}/></li></Link>
                    </ul>
                </nav>
            </header>
        </>
    );

function logout() {
    localStorage.removeItem('token');
}
export default Header;