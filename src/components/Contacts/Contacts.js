import {useState} from "react"

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {id: 1, name: "John Doe", phone: "123-456-7890"},
    {id: 2, name: "Jane Smith", phone: "098-765-4321"}
  ])

const [name, setName] = useState("")
const [phone, setPhone] = useState("")

const handleAddContact = () => {
  const newContact = {
    id: Date.now(),
    name: name,
    phone: phone
  }
  
  setContacts([...contacts, newContact])
  setName("")
  setPhone("")
}



  return (
    <div className="container">
      <h2>Contacts List</h2>

      <div className="inputs">
  <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
  <input onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Phone" />
  <button onClick={handleAddContact}>Add New Contact</button>
</div>

      <div className="contacts-list">
        {contacts.map(contact => (
          <div className="contact-card">
          <div key={contact.id}>
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
          </div>
          <button onClick={() => setContacts(contacts.filter(c => c.id !== contact.id))}>Delete</button>
          </div>
        ))}
      </div>

    </div>
  )

    
}
export default Contacts