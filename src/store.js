import create from "zustand"

const useStore = create((set, get) => ({
     contacts: [],

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

}))

export default useStore


