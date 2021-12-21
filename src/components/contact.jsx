import useStore from "../store";
import "../styles/contact.css"

export default function Contact({ contact }) {

  function deleteContact() {

  }

    return (
          
            <div className="contact">
              <p className="name">{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.address}</p>
              <button className="delete" onClick={deleteContact}>Delete</button>
            </div>
           

    );
  }