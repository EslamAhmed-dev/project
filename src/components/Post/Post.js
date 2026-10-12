const Post = ({ title = "default post and frist one",like = 0,views = 0}) => {
  return (
    <div style = {{
        backgroundColor: "red",
        color: "white",
        margin:"10px",
        padding: "10px",
    }}
    
    >
    <h2>{title}</h2>
    <p>{like}</p>
    <p>{views}</p>
    </div>
  );
};
export default Post;
