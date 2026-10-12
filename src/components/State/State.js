import {useState} from 'react';
const State = ()=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [bassword, setBassword] = useState("");

     const [name,setName] = useState("");
     const counrty = (e) =>{
        setName(e.target.value)
      }
    
      const handleSubmit = () =>{
       
        alert(`your name is: ${username} and your email is: ${email} and your bassword is: ${bassword}`)

      }
      const [status,setStatus] = useState(false);
      const handbtn = () =>{
        setStatus(!status)
      }

    return (
        <div>
            <h2>true or false:{String(status)}</h2>
            <button onClick={handbtn}>change satatus</button>

            <form action={handleSubmit}>
                <div>
                    <input type="text" placeholder="enter your name" value={username} onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="enter your bassword" value={bassword} onChange={(e)=>setBassword(e.target.value)} />
                </div>
                <button>submit</button>
            </form>

          <select onChange={counrty}>
            <option>egypt</option>
            <option>syria</option>
            <option>lebanon</option>
            <option>irag</option>
        </select> 
        <h2>your country is: {name}</h2>




        </div>
    )
}
export default State