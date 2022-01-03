import CartContext from './cart-context';

/* 用来改变cart内容 有usestate */
const CartTextProvider = props =>{
    const addItemToCartHandler = props =>{

    }

    const removeItemToCartHandle = id =>{

    }


    const cartContext = {
        /* this is the place cart data mangeing place */
        items: [],
        totalAmount : 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandle,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartTextProvider;