import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import {ContactCard} from "../component/ContactCard.jsx";

const Contact = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <div>
        {store.contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contact;