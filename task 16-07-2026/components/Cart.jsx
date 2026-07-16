import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../features/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart">

      <h2>Shopping Cart</h2>

      {
        cartItems.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <>
            {
              cartItems.map((item) => (
                <div
                  className="cart-item"
                  key={item.id}
                >
                  <h3>{item.name}</h3>

                  <p>₹ {item.price}</p>

                  <button
                    onClick={() =>
                      dispatch(removeItem(item.id))
                    }
                  >
                    Remove
                  </button>

                </div>
              ))
            }

            <h2>Total : ₹ {totalPrice}</h2>

            <button
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

          </>
        )
      }

    </div>
  );
}

export default Cart;