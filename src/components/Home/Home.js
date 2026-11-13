
    const Home = () =>{
      const islocal = false;
     
      return (
        <div>
        {islocal ? <h1 style={{color: "green"}}>hello admin</h1> : <h1 style={{color: "red"}}>hello user</h1>}
        </div>
      )
      
      
    }
    export default Home
   