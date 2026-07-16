const products=[

{
id:1,
name:"Laptop",
price:50000
},

{
id:2,
name:"Mobile",
price:20000
},

{
id:3,
name:"Headphones",
price:3000
}

];

function ProductList({dispatch}){

    return(

        <>

        <h2>Products</h2>

        {

            products.map(product=>(

                <div key={product.id}>

                    <h3>{product.name}</h3>

                    <p>₹ {product.price}</p>

                    <button

                    onClick={()=>dispatch({

                        type:"ADD_TO_CART",

                        payload:product

                    })}

                    >

                    Add To Cart

                    </button>

                    <hr/>

                </div>

            ))

        }

        </>

    )

}

export default ProductList;