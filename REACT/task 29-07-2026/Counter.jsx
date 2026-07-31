// import { Component } from "react";

// class Counter extends Component {

//   render() {

//     console.log("Counter Rendered");

//     return (
//       <h2>Counter Component</h2>
//     );
//   }
// }

// export default Counter;


import { PureComponent } from "react";

class Counter extends PureComponent {

  render() {

    console.log("Counter Rendered");

    return (
      <h2>Counter Component</h2>
    );
  }
}

export default Counter;