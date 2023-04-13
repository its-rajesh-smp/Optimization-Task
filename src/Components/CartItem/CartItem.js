import React from 'react';
import "./CartItem.css"

function CartItem(props) {

    return (
        <div className=' CartItem-div '>
            <h1>{props.val.name}</h1>
            <h1>$ <span>{props.val.price}</span></h1>
            <h1>X <span>{props.val.quantity}</span></h1>
            <h1>➡️➡️➡️ <span>{props.val.price * props.val.quantity}</span></h1>
        </div>
    );
}

export default CartItem;
