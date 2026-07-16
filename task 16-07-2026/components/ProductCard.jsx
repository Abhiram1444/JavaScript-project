import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  function handleAddCart() {
    dispatch(addItem(product));
  }

  return (
    <div className="card">

      <h2>{product.name}</h2>

      <h3>₹ {product.price}</h3>

      <button onClick={handleAddCart}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;