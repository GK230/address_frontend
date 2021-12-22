import useStore from "../store";
import Contact from "../components/contact";


export default function Result() {
    let contact = useStore((state) => state.contact)
    // contact = contact[0]

    if (!contact) {
        return <h2>Loading...</h2>
    }

    contact = contact[0]
    console.log(contact)

    return(
        <section>
            <div>
                <Contact contact={contact} />
            </div>
        </section>)
}
