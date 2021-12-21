import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AddContact from "./routes/add_contact";
import Contacts from "./routes/contacts";
import Search from "./routes/search";
import Find from "./routes/find";
import Result from "./routes/result";
import "./index.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="add_contact" element={<AddContact />} />
        <Route path="search" element={<Search />} />
        <Route path="find" element={<Find />} />
        <Route exact path="result" element={<Result />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
