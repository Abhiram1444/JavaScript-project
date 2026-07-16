import CartItem from "./CartItem";

function Cart({cart,dispatch}){

    const total=cart.reduce(

        (sum,item)=>sum+item.price*item.quantity,

        0

    );

    return(

        <>

        <h2>Shopping Cart</h2>

        {

            cart.length===0

            ?

            <h3>Cart Empty</h3>

            :

            cart.map(item=>

                <CartItem

                key={item.id}

                item={item}

                dispatch={dispatch}

                />

            )

        }

        <h2>Total : ₹ {total}</h2>

        <button

        onClick={()=>dispatch({

            type:"CLEAR_CART"

        })}

        >

        Clear Cart

        </button>

        </>

    )

}

export default Cart;