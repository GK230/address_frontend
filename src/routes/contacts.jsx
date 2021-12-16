import useStore from "../store";

export default function Contacts() {
  const contacts = useStore((state) => state.contacts)

  function deleteContact() {
    

  }


    return (
      <main>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
          <li key={contact.id}>
            <div className="contact">
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.address}</p>
              <button onClick={deleteContact}>Delete</button>
            </div>
          </li>
          ))}
        </ul>

      </main>
    );
  }