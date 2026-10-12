const Event = () =>{
   const handbtn=(e)=>{
     e.preventDefault();
    console.log("eslam");
   }
    return (
        <>
         <button onContextMenu={handbtn}>submit</button>
        </>
    )
};
 export default Event
// const Event = () => {
//   const handleSubmit = () => {
//     console.log("submit");
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" />
//         <button>submit</button>
//       </form>
//     </>
//   );
// };

// export default Event;