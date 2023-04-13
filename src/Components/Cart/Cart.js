import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import "./Cart.css"
import CartDataCTX from '../../Context/cartDataContext';
import CartItem from '../CartItem/CartItem';



function Cart(props) {

    const cartData = useContext(CartDataCTX)


    const closeCart = () => {
        props.setCartOpener(false)
    }



    const placeOrder = () => {
        console.log(cartData.cartList);
        cartData.setCartList((prev) => {
            return []
        })
        cartData.setTotal({ quantity: 0, price: 0 })
        closeCart()

    }


    return (
        ReactDOM.createPortal(

            < div className=' Cart-div ' >
                <div className='cart__container'>

                    {
                        cartData.cartList.map((val) => {
                            return <CartItem val={val} key={Math.random()} />
                        })
                    }

                </div>

                <div>
                    <button onClick={closeCart}>CLOSE</button>
                    <button onClick={placeOrder}>ORDEr</button>
                </div>
            </div >

            , document.querySelector("#modal")
        )
    );
}

export default Cart;
