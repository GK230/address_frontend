import { useEffect } from "react";
import Contact from "../components/contact";
import useStore from "../store";
import "../styles/contacts.css"

export default function Contacts() {
  const contacts = useStore((state) => state.contacts)
  const getAllContacts = useStore((state) => state.getAllContacts)


  useEffect(() => {
    getAllContacts();
  }, []);

  return (
      <main className="contacts-container">
        <ul className="contacts-list">
          {contacts.map((contact) => (
          <li className="contacts-list-item" key={contact.id}>
              <Contact contact={contact} />
          </li>
          ))}
        </ul>

      </main>
    );
  }