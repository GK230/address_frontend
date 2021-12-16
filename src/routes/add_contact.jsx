import "../styles/add_contact.css"
import { useState } from "react";
import useStore from "../store"; 



const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: ""
}

export default function AddContact() {
  const [form, setForm] = useState(initialForm);
  const addContact = useStore((store) => store.addContact);


  const handleChange = (e) => {
    //const name = e.target.name 
    //const value = e.target.value 
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

    function handleSubmit(e) {
      e.preventDefault();
      const targetEvent = e.target;
      let newContact = {
          name: targetEvent.name.value,
          email: targetEvent.email.value,
          phone: targetEvent.phone.value,
          address: targetEvent.address.value,
        };

      addContact(newContact)
      targetEvent.reset();
  }
      

    return (
      <main>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" value={form.name} onChange={handleChange}/>
            <input type="text" placeholder="Email" name="email" value={form.email} onChange={handleChange}/>
            <input type="tel" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange}/>
            <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
      </main>
    );
  }