import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>Address book!</h1>
      <nav>
        <Link to="/contacts">Contacts</Link> |{" "}
        <Link to="/add_contact">Add contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
