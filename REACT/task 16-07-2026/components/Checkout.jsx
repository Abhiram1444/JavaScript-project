import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
};

function reducer(state, action) {

  switch(action.type){

    case "UPDATE_FIELD":

      return{
        ...state,
        [action.field]:action.value
      };

    case "RESET":

      return initialState;

    default:

      return state;
  }

}

function Checkout() {

  const [formState,dispatch]=useReducer(
    reducer,
    initialState
  );

  function handleChange(e){

    dispatch({
      type:"UPDATE_FIELD",
      field:e.target.name,
      value:e.target.value
    });

  }

  function handleSubmit(e){

    e.preventDefault();

    alert("Order Placed Successfully");

    console.log(formState);

    dispatch({
      type:"RESET"
    });

  }

  return(

    <div className="checkout">

      <h2>Checkout Form</h2>

      <form onSubmit={handleSubmit}>

        <input
        type="text"
        name="name"
        placeholder="Name"
        value={formState.name}
        onChange={handleChange}
        />

        <input
        type="email"
        name="email"
        placeholder="Email"
        value={formState.email}
        onChange={handleChange}
        />

        <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formState.phone}
        onChange={handleChange}
        />

        <input
        type="text"
        name="address"
        placeholder="Address"
        value={formState.address}
        onChange={handleChange}
        />

        <input
        type="text"
        name="city"
        placeholder="City"
        value={formState.city}
        onChange={handleChange}
        />

        <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={formState.pincode}
        onChange={handleChange}
        />

        <button>
          Place Order
        </button>

      </form>

    </div>

  );

}

export default Checkout;