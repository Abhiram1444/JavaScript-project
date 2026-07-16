function CartItem({item,dispatch}){

    return(

        <div>

            <h3>{item.name}</h3>

            <p>₹ {item.price}</p>

            <p>Quantity : {item.quantity}</p>

            <button

            onClick={()=>dispatch({

                type:"INCREMENT",

                payload:item.id

            })}

            >

            +

            </button>

            <button

            onClick={()=>dispatch({

                type:"DECREMENT",

                payload:item.id

            })}

            >

            -

            </button>

            <button

            onClick={()=>dispatch({

                type:"REMOVE",

                payload:item.id

            })}

            >

            Remove

            </button>

        </div>

    )

}

export default CartItem;