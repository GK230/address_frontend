import { useEffect } from "react";
import useStore from "../store";
import "../styles/contact.css"

export default function Contact({ contact}) {
  const deleteContact = useStore((store) => store.deleteContact);
  const removeContact = useStore((store) => store.removeContact);
  // const contact = useStore((state) => state.contact)

   const removeContactComponent = (name)  => {
    
      deleteContact(contact.name);
      removeContact()

      
  }

  if(!contact) {
    return <h2>Loading....</h2>
  }

    return (
          
        <div className="contact">
          <p className="name">{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.address}</p>
          <button className="delete" onClick={removeContactComponent}>Delete</button>
        </div>
        

    );
  }