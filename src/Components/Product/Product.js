import React, { useContext } from 'react';
import "./Product.css"
import CartDataCTX from '../../Context/cartDataContext';

function Product(props) {
    const addToCartContext = useContext(CartDataCTX)

    const onBtnClick = (productData, quantity) => {
        addToCartContext.addToCart(productData, quantity)
    }
    console.log("RENDER");
    return (
        <div className=' Product-div '>
            <p>{props.val.name}</p>
            <p>{props.val.desc}</p>
            <p>{props.val.price}</p>
            <button onClick={() => { onBtnClick(props.val, 1) }} >Buy 1</button>
            <button onClick={() => { onBtnClick(props.val, 2) }} >Buy 2</button>
            <button onClick={() => { onBtnClick(props.val, 3) }} >Buy 3</button>
        </div>
    );
}

export default Product;
