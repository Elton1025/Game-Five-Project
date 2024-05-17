import React from "react";
import logo from "../images/gfivelogo.png"
import './navbar.css';
import { MenuData } from "./menudata";


const Navbar = () => {
    return (
        <div className="div-nav">
            
            <nav className="navbar">
                <div className="logo">
                    <h1 className="logoheading" >GameFive</h1>
                    <img src={logo} className="gfivelogo"></img>
                </div>
                <ul className="nav-menu">
                    {MenuData.map((item,index)=>{
                        return (
                            <li key={index}>
                                <a href={item.url}
                                className={item.cName}
                                >{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
           
        </div>
    )
}

export default Navbar;