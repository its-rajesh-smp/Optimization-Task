import React, { useState, useContext } from 'react';
import "./CartBtn.css"
import Cart from '../Cart/Cart';
import CartDataCTX from '../../Context/cartDataContext';

function CartBtn(props) {
    const cartTotal = useContext(CartDataCTX)


    const [cartOpener, setCartOpener] = useState(false)


    return (
        <>
            {cartOpener && <Cart setCartOpener={setCartOpener} />}
            <div onClick={() => { setCartOpener(true) }} className=' CartBtn-div '>

                <h1>CART <span>{cartTotal.total.quantity}</span></h1>
            </div>
        </>
    );
}

export default CartBtn;
