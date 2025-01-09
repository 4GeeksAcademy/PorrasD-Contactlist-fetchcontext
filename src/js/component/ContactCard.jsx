import React, { useContext } from 'react';
import ContactContext from './ContactContext';

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default ContactCard;