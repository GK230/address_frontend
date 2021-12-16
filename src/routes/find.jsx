import useStore from "../store";
import { useEffect } from "react";
import { useState } from "react";
import Result from "./result";
import { Link } from "react-router-dom";

export default function Find() {
    const [name, setName] = useState("")
    const contact = useStore((state) => state.contact)
    const fetchContactByName = useStore((state) => state.getContactByName)


      function handleSubmit(e) {
        e.preventDefault();
        fetchContactByName(name);
    }


    return(<main>
        <h2>Find contact</h2>
        <form className="find">
            <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <Link to="/result"><button type="submit" onClick={handleSubmit}>Find</button></Link>
        </form>
        </main>)
}
