import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mobile Phone" },
    { id: 103, name: "Headphones" },
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>

          <Link to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;