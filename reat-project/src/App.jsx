
import Counter from "../../task 29-07-2026/Counter";
import { PureComponent } from "react";

class App extends PureComponent {

  state = {
    count: 0
  };

  render() {

    console.log("App Rendered");

    return (
      <div>

        <h1>{this.state.count}</h1>

        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          Increment
        </button>

        <Counter />

      </div>
    );
  }
}

export default App;







// import { useState } from "react";
// import Child from "../../task 29-07-2026/reactmemo/Child";
// import Childwithmemo from "../../task 29-07-2026/reactmemo/Childwithmemo";

// function App() {

//   const [count, setCount] = useState(0);

//   return (

//     <div>

//       <h1>{count}</h1>

//       <button
//         onClick={() => setCount(count + 1)}
//       >
//         Increment
//       </button>

//       <Childwithmemo />

//     </div>

//   );
// }

// export default App;



// import { useState } from "react";
// import Childpropschange from "../../task 29-07-2026/reactmemo/Childpropschange";

// function App() {

//   const [name, setName] = useState("Abhiram");

//   return (

//     <div>

//       <button
//         onClick={() => setName("Rahul")}
//       >
//         Change Name
//       </button>

//       <Childpropschange name={name} />

//     </div>

//   );
// }

// export default App;


//without memo
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [number] = useState(5);

//   function factorial(n) {
//     console.log("Calculating...");
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }

//     return result;
//   }

//   return (
//     <div>
//       <h2>Counter: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <h3>Factorial: {factorial(number)}</h3>
//     </div>
//   );
// }

// export default App;


//with usememo
// import { useMemo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [number] = useState(5);

//   function factorial(n) {
//     console.log("Calculating...");
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }

//     return result;
//   }

//   const result = useMemo(() => {
//     return factorial(number);
//   }, [number]);

//   return (
//     <div>
//       <h2>Counter: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <h3>Factorial: {result}</h3>
//     </div>
//   );
// }

// export default App;

// Large calculations with usememo
// import { useMemo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const sum = useMemo(() => {
//     console.log("Calculating Sum...");
//     let total = 0;

//     for (let i = 1; i <= 10000000; i++) {
//       total += i;
//     }

//     return total;
//   }, []);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         Counter {count}
//       </button>

//       <h2>{sum}</h2>
//     </div>
//   );
// }

// export default App;


//without callback 

// import { useCallback, useState } from "react";
// import ChildwithoutCallback from "../../task 29-07-2026/callback/Childwithout callback()";

// function App() {

//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Button Clicked");
//   };

//   return (
//     <div>

//       <h1>{count}</h1>

//       <button
//         onClick={() => setCount(count + 1)}
//       >
//         Increment
//       </button>

//       <ChildwithoutCallback
//         handleClick={handleClick}
//       />

//     </div>
//   );
// }

// export default App;
