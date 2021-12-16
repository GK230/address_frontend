import useStore from "../store";
import { useEffect } from "react";
import { useState } from "react";


export default function Result() {
    const contact = useStore((state) => state.contact)

    console.log(contact)

    return(<main>
        
        <p>{contact.name}</p>
        </main>)
}
