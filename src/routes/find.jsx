import useStore from "../store";
import { useEffect } from "react";
import { useState } from "react";
import Result from "./result";
import { Link } from "react-router-dom";
import Contact from "../components/contact";
import { useNavigate } from 'react-router-dom';
import "../styles/find.css"


export default function Find() {
    let navigate = useNavigate();
    const [name, setName] = useState("")
    const contact = useStore((state) => state.contact)
    const fetchContactByName = useStore((state) => state.getContactByName)


      function handleSubmit(e) {
        e.preventDefault();
        fetchContactByName(name);
        navigate('/result');
    }


    return(<main>
        <form className="find">
            <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <Link to="/result"><button type="submit" onClick={handleSubmit}>Find</button></Link>
        </form>
        
        </main>)
}
