import React, { useContext } from 'react';
import "./ProductContainer.css"
import Product from '../Product/Product';
import SendDataCTX from '../../Context/sendDataContext';

function ProductContainer(props) {

    const productList = useContext(SendDataCTX)

    return (
        <div className=' ProductContainer-div '>

            {
                productList.productList.map((val) => {
                    return <Product val={val} key={Math.random()} />
                })
            }

        </div>
    );
}

export default ProductContainer;
