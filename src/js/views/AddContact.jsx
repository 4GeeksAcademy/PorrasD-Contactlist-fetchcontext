import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (id) {
      const contact = store.contacts.find((c) => c.id === parseInt(id));
      if (contact) setForm(contact);
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      actions.updateContact(id, form);
    } else {
      actions.addContact(form);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? "Update Contact" : "Add Contact"}</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <button type="submit">{id ? "Update" : "Add"}</button>
    </form>
  );
};

export default AddContact;