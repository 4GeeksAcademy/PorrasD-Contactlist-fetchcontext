import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext.js";
import Contact from "./views/Contact.jsx";
import AddContact from "./views/AddContact.jsx";

const Layout = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<AddContact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default injectContext(Layout);