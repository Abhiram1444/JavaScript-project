import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "SAMSUNG S26",
    price: 55000,
  },

  {
    id: 2,
    name: "OPPO F27 PRO",
    price: 30000,
  },

  {
    id: 3,
    name: " BOAT Headphones",
    price: 2500,
  },

  {
    id: 4,
    name: "Keyboard",
    price: 1800,
  },

  {
    id: 5,
    name: "Earbuds",
    price: 900,
  },
];

function ProductList() {
  return (
    <div className="products">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>
  );
}

export default ProductList;