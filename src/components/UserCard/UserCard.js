const UserCard = ({name, age, isonline,role , unread}) => {
    return (
        <div style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "5px",
            gap: "10px",
        }}>
            {isonline ? <h1 style={{color: "green"}}>online</h1> : <h1 style={{color: "red"}}>offline</h1>}
            <h2>{name}</h2>
            <p>Age: {age}</p>
            {role === "admin" && <h2>Admin</h2>}
            {unread > 0 && <h2 style={{color: "blue"}}>you have {unread} unread messages</h2>}
        </div>
    )
}
export default UserCard