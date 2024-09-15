import Card from "./Card.jsx";
import {contacts} from "./contacts.js";

function App() {
    return (<>
        <h1 className="heading">My Contacts</h1>
        {contacts.map(contact => <Card
            key={contact.id}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}/>)}
    </>);
}

export default App;
