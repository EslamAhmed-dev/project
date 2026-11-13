import { Footer, Header, Home, Post,Event,State,Array,DoTo, Contacts, UserCard, Axios, UseRef,Reducer } from "./components";
import { Num } from "./components/Data/Data";
import "./index.css";
function App() {
  return (
    <>
    <Reducer/>
    <UseRef/>
    <Axios/>
    <UserCard
    name="eslam"
    isonline={true}
    age={20}
    role="admin"
    unread={5}
    />
    <UserCard
    name="ahmed"
    isonline={false}
    age={25}
    role="user"
    unread={0}
    />
    <Contacts/>
    <Array/>
    <DoTo/>
      <State />
      <Header />
      <Home />
      <Footer />
      <Num />
      <Post title="post one evry thing" like="0" views="0"/>
      <Post  like="100000" views="100000"/>
      <Post title="post one evry thing" />
      <Event/>
      
    </>
  );
}
export default App;
