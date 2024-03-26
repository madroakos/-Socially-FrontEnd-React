import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
const Header = () => (
        <>
            <header>
                <Link to={`/home`} id='logoHref'><div className="logo">
                        <img src="/logo.png" alt="Logo" id="headerLogo"/>
                        <p id="logoLabel">ocially</p>
                </div></Link>
                <div className="searchBarLabel" id="searchBarLabel">
                    <label>
                        <input type="text" placeholder="Search" id="searchBar" autoComplete="off"/>
                    </label>
                    <div id="dropDown" className="dropdown-content"></div>
                </div>
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