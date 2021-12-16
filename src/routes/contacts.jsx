import useStore from "../store";
import { useEffect } from "react";

export default function Contacts() {
  const getAllContacts = useStore((state) => state.getAllContacts);
  const contacts = useStore((state) => state.contacts)

  useEffect(() => {
    getAllContacts();
  }, []);


    return (
      <main>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
          <li>
            <div className="contact">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.address}</p>
            </div>
          </li>
          ))}
        </ul>

      </main>
    );
  }