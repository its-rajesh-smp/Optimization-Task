import React, { useState } from 'react';

const CartDataCTX = React.createContext({
    total: { quantity: 0, price: 0 },
    setTotal: () => { },
    cartList: ([]),
    setCartList: () => { },
    addToCart: () => { },

})



const CartDataProvider = (props) => {
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState({ quantity: 0, price: 0 })


    /* -------------------------------------------------------------------------- */
    /*                                 ADD TO CART                                */
    /* -------------------------------------------------------------------------- */
    const addToCart = (productData, quantity) => {

        const newDataArray = { name: productData.name, price: Number(productData.price), quantity: quantity }

        setCartList((prev) => {
            let isPresent = false
            // check is present then add
            const newArray = prev.filter((val) => {
                if (val.name === productData.name) {
                    const newQuantity = val.quantity + Number(quantity)
                    val.quantity = newQuantity
                    isPresent = true
                    return val
                }
                else {
                    return val
                }
            })

            if (isPresent !== true) {
                return [...newArray, newDataArray]
            }
            else {
                return newArray
            }


        })



        setTotal((prev) => {
            return { quantity: prev.quantity + Number(quantity), price: prev.price + (Number(productData.price) * Number(quantity)) }
        })
    }




    return (
        <CartDataCTX.Provider value={{ total, setTotal, cartList, setCartList, addToCart }}>
            {props.children}
        </CartDataCTX.Provider>
    )
}

export default CartDataCTX
export { CartDataProvider }


