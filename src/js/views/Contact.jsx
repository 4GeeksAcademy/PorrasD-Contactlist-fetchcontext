import React, { useContext, useEffect } from "react";
import { AppContext } from "../store/AppContext.js";
import ContactCard from "../components/ContactCard.jsx";

const Contact = () => {
  const { store, actions } = useContext(AppContext);

  useEffect(() => {
    actions.fetchContacts();
  }, [actions]);

  return (
    <div>
      <h1>Contact List</h1>
      {store.contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contact;
