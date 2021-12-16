import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import useStore from "./store";



function App() {
  const getAllContacts = useStore((state) => state.getAllContacts);

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="main">
      <h1>Address book</h1>
      <nav>
        <Link to="/contacts">Contacts</Link> |{" "}
        <Link to="/add_contact">Add contact</Link> |{" "}
        <Link to="/find">Find</Link>|{" "}
        <Link to="/search">Search</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
