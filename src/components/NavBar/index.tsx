import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export function NavBar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/order">Order</NavLink></li>
                <li><NavLink to="/ledger">Ledger</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><input type="search"></input></li>
            </ul>
        </nav>
    )
}