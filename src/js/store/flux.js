const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: [],
	  },
	  actions: {
		// Fetch all contacts
		fetchContacts: async () => {
		  try {
			const response = await fetch("https://playground.4geeks.com/contact/docs");
			const data = await response.json();
			setStore({ contacts: data });
		  } catch (error) {
			console.error("Error fetching contacts:", error);
		  }
		},
  
		// Add a new contact
		addContact: async (newContact) => {
		  try {
			const response = await fetch("https://playground.4geeks.com/contact/docs", {
			  method: "POST",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify(newContact),
			});
			if (response.ok) {
			  getActions().fetchContacts(); // Refresh the contact list
			}
		  } catch (error) {
			console.error("Error adding contact:", error);
		  }
		},
  
		// Update a contact
		updateContact: async (id, updatedContact) => {
		  try {
			const response = await fetch(`https://playground.4geeks.com/contact/docs/${id}`, {
			  method: "PUT",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify(updatedContact),
			});
			if (response.ok) {
			  getActions().fetchContacts(); // Refresh the contact list
			}
		  } catch (error) {
			console.error("Error updating contact:", error);
		  }
		},
  
		// Delete a contact
		deleteContact: async (id) => {
		  try {
			const response = await fetch(`https://playground.4geeks.com/contact/docs/${id}`, {
			  method: "DELETE",
			});
			if (response.ok) {
			  getActions().fetchContacts(); // Refresh the contact list
			}
		  } catch (error) {
			console.error("Error deleting contact:", error);
		  }
		},
	  },
	};
  };
  
  export default getState;