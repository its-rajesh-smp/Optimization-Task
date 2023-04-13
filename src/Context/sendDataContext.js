import React, { useState } from 'react';


const SendDataCTX = React.createContext({
    storeData: () => { },
    setProductList: () => { },
    productList: ([])

})




const SendDataProvider = (props) => {

    const [productList, setProductList] = useState([])



    /* -------------------------------------------------------------------------- */
    /*                           FUNCTION TO STORE DATA                           */
    /* -------------------------------------------------------------------------- */
    const storeData = (data) => {
        setProductList((prev) => {
            return [...prev, data]
        })
        console.log("DATA STORED");
    }



    return (
        <SendDataCTX.Provider value={{ storeData, productList, setProductList }}>
            {props.children}
        </SendDataCTX.Provider>
    )
}

export default SendDataCTX
export { SendDataProvider }