
import { useState } from "react";
import Modal from "../../task 30-07-2026/Modal";

function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>React Portal Demo</h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {
        showModal &&
        <Modal closeModal={() => setShowModal(false)} />
      }

    </div>
  );

}

export default App;



// import { useState } from "react";
// import Popup from "../../task 30-07-2026/Popup";

// function App(){

// const [showPopup,setShowPopup]=useState(false);

// return(

// <div>

// <button onClick={()=>setShowPopup(true)}>

// Show Popup

// </button>

// {
// showPopup &&
// <Popup/>
// }

// </div>

// );

// }

// export default App;



// import { useState } from "react";
// import Tooltip from "../../task 30-07-2026/Tooltip";

// function App(){

// const [show,setShow]=useState(false);

// return(

// <div style={{margin:"100px"}}>

// <button

// onMouseEnter={()=>setShow(true)}

// onMouseLeave={()=>setShow(false)}

// >

// Hover Me

// </button>

// {
// show &&
// <Tooltip/>
// }

// </div>

// );

// }

// export default App;


//Event binding example input change event
// import { useState } from "react";

// function App() {

//   const [name, setName] = useState("");

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Name"
//         onChange={handleChange}
//       />

//       <h2>{name}</h2>
//     </div>
//   );
// }

// export default App;


// event handling in class component

// import React, { Component } from "react";

// class App extends Component {

//   handleClick() {
//     alert("Button Clicked!");
//   }

//   render() {
//     return (
//       <div>
//         <h2>Event Handling in Class Component</h2>

//         <button onClick={() => this.handleClick()}>
//           Click Me
//         </button>
//       </div>
//     );
//   }
// }

// export default App;



// event handling form submit in class method

// import React, { Component } from "react";

// class App extends Component {

//   handleSubmit = (event) => {

//     event.preventDefault();

//     alert("Form Submitted");

//   };

//   render() {

//     return (

//       <form onSubmit={this.handleSubmit}>

//         <input type="text" />

//         <button>

//           Submit

//         </button>

//       </form>

//     );

//   }

// }

// export default App;



// passing parameters to event handlers with numbers
// function App() {

//   function showId(id) {
//     alert("Product ID: " + id);
//   }

//   return (
//     <div>

//       <button onClick={() => showId(101)}>
//         Show ID
//       </button>

//     </div>
//   );
// }

// export default App;


// passing a string

// function App() {

//   function greet(name) {

//     alert("Welcome " + name);

//   }

//   return (

//     <button onClick={() => greet("Abhiram")}>

//       Greet

//     </button>

//   );

// }

// export default App; 


// Click, Change, Submit, Focus, and Blur in React

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("Click the button");
//   const [focusMessage, setFocusMessage] = useState("");

//   // Click Event
//   function handleClick() {
//     setMessage("Button Clicked!");
//   }

//   // Change Event
//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   // Submit Event
//   function handleSubmit(event) {
//     event.preventDefault();
//     alert(`Form Submitted Successfully!\nName: ${name}`);
//   }

//   // Focus Event
//   function handleFocus() {
//     setFocusMessage("Input field is focused");
//   }

//   // Blur Event
//   function handleBlur() {
//     setFocusMessage("Input field lost focus");
//   }

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>React Events Example</h1>

//       {/* Click Event */}
//       <h2>1. Click Event</h2>
//       <button onClick={handleClick}>Click Me</button>
//       <p>{message}</p>

//       <hr />

//       {/* Form Events */}
//       <h2>2. Form Events</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={handleChange}
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//         />

//         <br />
//         <br />

//         <button type="submit">Submit</button>
//       </form>

//       <p>
//         <strong>Current Input:</strong> {name}
//       </p>

//       <p>{focusMessage}</p>
//     </div>
//   );
// }

// export default App;
