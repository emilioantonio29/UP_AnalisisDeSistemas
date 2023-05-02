import React from "react";
import logo from '../../logo.svg';
import { NavLink } from "react-router-dom";
import styles from './navbar.scss'

const NavbarComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light link-active" style={{border: "0px solid red"}}>
                <div className="navbar-div" style={{width: "100%", border: "0px solid red", paddingLeft: "1%", paddingRight: "1%"}}>
                    <div className="navbar-collapse" id="navbarText1" style={{border: "0px solid red"}}>
                        <img style={{height: "9vh"}} src={logo} className="App-logo" alt="logo" />
                        <span className="navbar-text my-2 my-sm-0">
                            Video Reader | UP
                        </span>
                    </div>
                    <div className="navbar-collapse d-flex justify-content-center" id="navbarText2" style={{border: "0px solid red"}}>
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{marginRight: "15%"}}>
                                <NavLink to={`/`} className={({ isActive }) => (isActive ? 'link-active' : 'text-link')} activeclassname="link-active">Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/video`} className={({ isActive }) => (isActive ? 'link-active' : 'text-link')} activeclassname="link-active">Video</NavLink>
                            </li>
                            <li className="nav-item nav-help">
                                <NavLink to={`/help`} className={({ isActive }) => (isActive ? 'link-active' : 'text-link')} activeclassname="link-active">Help</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-collapse" id="navbarText3" style={{border: "0px solid red"}}>
                        <ul className="navbar-nav" style={{paddingRight: "7%"}}>
                            <li className="nav-item">
                                <NavLink to={`/help`} className={({ isActive }) => (isActive ? 'link-active' : 'text-link')} activeclassname="link-active">Help</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarComponent;