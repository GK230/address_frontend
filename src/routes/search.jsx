import useStore from "../store";
import Contact from "../components/contact";
import { useState } from "react";


export default function Search() { 
    const contacts = useStore((state) => state.contacts)
    let [inputValue, setInputValue] = useState('');

    let filtered = [];
    if (inputValue === "") {
        filtered = []
    } else {
        filtered = contacts.filter(contact => contact.name.toLowerCase().includes(inputValue.toLowerCase()));
    }

    if (filtered === []) {
        return <h2>Loading...</h2>
    }

    return(
        <main>
            <form className="search_form">
                <input type="text" placeholder="Search..." onChange={event => setInputValue(event.target.value)} />
            </form>

            <ul>

            {filtered.map((contact) => (
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
            </ul>
        </main>
    )
 }