import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "./task 12-08-2026/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Redux Toolkit Counter</h1>

      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>

        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;