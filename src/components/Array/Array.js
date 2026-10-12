import {useState} from 'react';

const Array = () =>{
    const [names,setNames] = useState(["eslam","ahmed"])
    const hadleoncilk = ()=>{
        setNames([...names,"Tolba"])
    }
return(
    <div>
        {names.map((name) => {
            return <h2>{name}</h2>
        })}
        <button onClick={hadleoncilk}>add name</button>

    </div>
);
}
export default Array

// import { useState } from 'react'

// const ArrayComponent = () => {
//   const [names, setNames] = useState(["ali", "mazen", "hasan"])

//   const handleClick = () => {
//     setNames([...names, "gamal"])
//   }

//   return (
//     <>
//       {names.map(name => {
//         return <h3>{name}</h3>
//       })}

//       <button onClick={handleClick}>add gamal</button>
//     </>
//   )
// }

// export default ArrayComponent