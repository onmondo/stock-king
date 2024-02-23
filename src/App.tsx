import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Ledger } from "./pages/Ledger";
import { About } from "./pages/About"; 
import { NavBar } from "./components/NavBar/index";
import UserProvider from "./context/UserContext";

export default function App() {
    return (
        <UserProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
                <Route path="/ledger" element={<Ledger />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </UserProvider>

    )
}