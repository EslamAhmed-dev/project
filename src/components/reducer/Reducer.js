import { useReducer } from "react";

const reducer = (state, action) => {
  // state = { count: 0 }
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count = {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>+2</button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>+10</button>
      
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>-2</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>-5</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>-10</button>
      
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
export default Reducer;