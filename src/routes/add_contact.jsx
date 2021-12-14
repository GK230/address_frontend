export default function AddContact() {
    return (
      <main>
        <h2>Add Contact</h2>
        <form action="/add" method="POST">
            <input type="text" placeholder="name" name="name"/>
            <input type="text" placeholder="email" name="email"/>
            <button type="submit">Submit</button>
        </form>
      </main>
    );
  }