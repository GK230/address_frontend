import useStore from "../store";
import Contact from "../components/contact";


export default function Result() {
    const contact = useStore((state) => state.contact)

    if (!contact) {
        return <h2>Loading...</h2>
    }

    return(
        <section>
            <div>
                <Contact contact={contact[0]} />
            </div>
        </section>)
}
