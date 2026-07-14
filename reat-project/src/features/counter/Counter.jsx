import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByFive,
  decrementByFive,
  incrementByAmount,
} from "./counterSlice";

import { useState } from "react";
import "./Counter.css";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");

  return (
    <div className="container">
      <h1>Redux Toolkit Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

      <button onClick={() => dispatch(incrementByFive())}>
        +5
      </button>

      <button onClick={() => dispatch(decrementByFive())}>
        -5
      </button>

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button
        onClick={() => {
          dispatch(incrementByAmount(amount));
          setAmount("");
        }}
      >
        Add Number
      </button>
    </div>
  );
}

export default Counter;