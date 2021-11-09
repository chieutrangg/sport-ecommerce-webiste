import React  from "react";
import App from "../../App";

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="images/logo.png" width="125px" />
            </div>
            <nav>
                <ul id="MenuItems">
                    <li><a href="/">Home</a> </li>
                    <li><a href="/products">Products</a> </li>
                    <li><a href="/about">About</a> </li>
                    <li><a href="">Contact</a> </li>
                    <li><a href="">Account</a> </li>
                </ul>
            </nav>
            <img src="images/cart.png" width="30px" height="30px" />
            <img src="images/menu.png" className="menu-icon" />
        </div>
    );
    }
    export default NavBar;