import "./App.css";

import Header from "../../task 16-07-2026/components/Header";
import ProductList from "../../task 16-07-2026/components/ProductList";
import Cart from "../../task 16-07-2026/components/Cart";
import Checkout from "../../task 16-07-2026/components/checkout";
import Footer from "../../task 16-07-2026/components/Footer";

function App() {

  return (

    <div className="container">

      <Header />

      <ProductList />

      <Cart />

      <Checkout />

      <Footer />

    </div>

  );

}

export default App;