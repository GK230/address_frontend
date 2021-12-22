import create from "zustand";

const useStore = create((set, get) => ({
  contacts: [],
  contact: null,
  removeContact: (name) =>
    get().contacts.filter((contact) => {
      return contact.name !== name;
    }),

  addContact: (data) => {
    fetch("http://localhost:5000/contact/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((newContact) => set({ contacts: [...get().contacts, newContact] }));
  },

  getAllContacts: () => {
    fetch("http://localhost:5000/contact")
      .then((resp) => resp.json())
      .then((contacts) => set({ contacts: contacts }));
  },
  getContactByName: (name) => {
    fetch(`http://localhost:5000/contact/${name}`)
      .then((res) => res.json())
      .then((contact) => set({ contact: contact }));
  },
  deleteContact: (name) => {
    fetch(`http://localhost:5000/contact/${name}`, { method: "DELETE" }).then(
      (res) => res.json()
    );
  },
}));

export default useStore;
