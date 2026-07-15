import {useReducer} from "react";

import "./App.css";

import ProductList from "./components/ProductList";

import Cart from "./components/Cart";

import {initialState} from "./reducer/initialState";

import {cartReducer} from "./reducer/cartReducer";

function App(){

const[state,dispatch]=useReducer(

cartReducer,

initialState

);

return(

<div>

<h1>Shopping Cart using useReducer</h1>

<ProductList dispatch={dispatch}/>

<hr/>

<Cart

cart={state.cart}

dispatch={dispatch}

/>

</div>

)

}

export default App;