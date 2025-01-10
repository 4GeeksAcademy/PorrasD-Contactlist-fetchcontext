import React, { useContext } from "react";
import { AppContext } from "../store/AppContext.js";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(AppContext);

  const handleDelete = () => {
    actions.deleteContact(contact.id);
  };

  return (
    <div className="contact-card">
      <h3>{contact.full_name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ContactCard;
