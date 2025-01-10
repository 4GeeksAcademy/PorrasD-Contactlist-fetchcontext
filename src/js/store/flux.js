const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: [],
	  },
	  actions: {
		fetchContacts: async () => {
		  try {
			const response = await fetch("https://playground.4geeks.com/contact");
			const data = await response.json();
			setStore({ contacts: data });
		  } catch (error) {
			console.error("Error fetching contacts:", error);
		  }
		},
		addContact: async (contact) => {
		  try {
			const response = await fetch("https://playground.4geeks.com/contact", {
			  method: "POST",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify(contact),
			});
			if (response.ok) {
			  getActions().fetchContacts();
			}
		  } catch (error) {
			console.error("Error adding contact:", error);
		  }
		},
		updateContact: async (id, contact) => {
		  try {
			const response = await fetch(`https://playground.4geeks.com/contact/${id}`, {
			  method: "PUT",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify(contact),
			});
			if (response.ok) {
			  getActions().fetchContacts();
			}
		  } catch (error) {
			console.error("Error updating contact:", error);
		  }
		},
		deleteContact: async (id) => {
		  try {
			const response = await fetch(`https://playground.4geeks.com/contact/${id}`, {
			  method: "DELETE",
			});
			if (response.ok) {
			  getActions().fetchContacts();
			}
		  } catch (error) {
			console.error("Error deleting contact:", error);
		  }
		},
	  },
	};
  };
  
  export default getState;

  