import { useRef } from "react";


function Useref() {
    const inputRef = useRef(null)

    const handlClick = ()=>{
        inputRef.current.style.backgroundColor = "blue"
    }

    return(
        <>
        <input ref={inputRef}/>
        <button onClick={handlClick}>click</button>
        </>
    )
}
export default Useref