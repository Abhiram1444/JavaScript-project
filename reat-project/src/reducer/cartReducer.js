export const cartReducer = (state, action) => {

    switch(action.type){

        case "ADD_TO_CART":

            const product = action.payload;

            const existingProduct = state.cart.find(
                item => item.id === product.id
            );

            if(existingProduct){

                return{

                    ...state,

                    cart: state.cart.map(item =>

                        item.id === product.id
                        ? {...item, quantity:item.quantity+1}
                        : item

                    )

                };

            }

            return{

                ...state,

                cart:[
                    ...state.cart,
                    {...product, quantity:1}
                ]

            };

        case "INCREMENT":

            return{

                ...state,

                cart: state.cart.map(item=>

                    item.id===action.payload

                    ? {...item,quantity:item.quantity+1}

                    : item

                )

            };

        case "DECREMENT":

            return{

                ...state,

                cart: state.cart.map(item=>

                    item.id===action.payload

                    ? {...item,quantity:item.quantity-1}

                    : item

                ).filter(item=>item.quantity>0)

            };

        case "REMOVE":

            return{

                ...state,

                cart: state.cart.filter(
                    item=>item.id!==action.payload
                )

            };

        case "CLEAR_CART":

            return{

                ...state,

                cart:[]

            };

        default:

            return state;

    }

}