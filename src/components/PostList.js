 import Post from "./Post/Post"
 const Posts = [
    {id: 1, title: "title one", desc: "describtion one"},
    {id: 1, title: "title one", desc: "describtion one"},
    {id: 1, title: "title one", desc: "describtion one"},
    {id: 1, title: "title one", desc: "describtion one"},
  ];

  function PostList(){
    return (
        <>
         {
        Posts.map(post=>{
          return <Post key={post.id} title ={post.title} desc = {post.desc}/>
        })
      }

        </>
    );
  }
  export default PostList