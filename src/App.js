import { Footer, Header, Home, Post,Event,State,Array,DoTo, Contacts } from "./components";
import { Num } from "./components/Data/Data";
import "./index.css";
function App() {
  return (
    <>
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
