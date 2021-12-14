import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddContact from "./routes/add_contact";
import Contacts from "./routes/contacts";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="add_contact" element={<AddContact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
