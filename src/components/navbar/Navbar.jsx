import React from "react";
import logo from '../../logo.svg';
import { NavLink } from "react-router-dom";
import style from './Navbar.module.css'

const NavbarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light link-active">
                <div className="d-flex container justify-content-between">
                    <div className=" navbar-collapse" id="navbarText" >
                        <img style={{height: "9vh", marginLeft: "-22px"}} src={logo} className="App-logo" alt="logo" />
                        <span className="navbar-text my-2 my-sm-0">
                            Social media Auth
                        </span>
                    </div>
                    <div className=" navbar-collapse" id="navbarText" >
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            test
                        </li>
                    </ul>
                    </div>
                    <div className=" navbar-collapse" id="navbarText">
                        <span className="navbar-text" style={{alignText: "right"}}>               
                    </span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarComponent;