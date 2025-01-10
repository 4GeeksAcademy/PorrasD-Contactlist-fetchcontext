import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../store/AppContext.js";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { store, actions } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({ full_name: "", email: "", phone: "" });

  useEffect(() => {
    if (id) {
      const existingContact = store.contacts.find((c) => c.id === parseInt(id));
      if (existingContact) setContact(existingContact);
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      actions.updateContact(id, contact);
    } else {
      actions.addContact(contact);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? "Edit Contact" : "Add Contact"}</h1>
      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        value={contact.full_name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={contact.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={contact.phone}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddContact;
