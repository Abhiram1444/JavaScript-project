import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>

      <p>
        You are viewing product with ID:
        <strong> {id}</strong>
      </p>

      <Link to="/products">Back to Products</Link>
    </div>
  );
}

export default ProductDetails;