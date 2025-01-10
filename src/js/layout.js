import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppContext from "./store/AppContext";  // Ruta corregida
import Contact from "./views/Contact";  // Ruta corregida
import AddContact from "./views/AddContact";  // Ruta corregida

const Layout = () => {
  return (
    <AppContext>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Contact</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit/:id" element={<AddContact />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
};

export default Layout;