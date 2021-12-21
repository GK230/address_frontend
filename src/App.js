import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import useStore from "./store";

function App() {
  const getAllContacts = useStore((state) => state.getAllContacts);
  const getContactByName = useStore((state) => state.getContactByName);

  useEffect(() => {
    getAllContacts();
  }, []);

  useEffect(() => {
    getContactByName();
  }, []);

  return (
    <div className="main">
      <h1>Address Book</h1>
      <nav>
        <ul>
          <li><Link to="/contacts">Contacts</Link> {" "}</li>
          <li><Link to="/add_contact">Add contact</Link> {" "}</li>
          <li><Link to="/find">Find By Name</Link>{" "}</li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
