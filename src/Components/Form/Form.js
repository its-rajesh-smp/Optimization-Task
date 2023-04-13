import React, { useContext, useState } from 'react';
import "./Form.css"
import SendDataCTX from '../../Context/sendDataContext';

function Form(props) {

    const sendDataContext = useContext(SendDataCTX)


    const [name, sName] = useState("")
    const [desc, sDesc] = useState("")
    const [price, sPrice] = useState("")


    const onBtnClickAdd = (e) => {
        e.preventDefault()

        const newDataObj = {
            name: name,
            desc: desc,
            price: price
        }
        sendDataContext.storeData(newDataObj)


        sName("")
        sDesc("")
        sPrice("")
    }



    return (
        <form className=' Form-div '>
            <input type='text' onChange={(e) => sName(e.target.value)} value={name} placeholder='CandyName' />
            <input type='text' onChange={(e) => sDesc(e.target.value)} value={desc} placeholder='Description' />
            <input type='text' onChange={(e) => sPrice(e.target.value)} value={price} placeholder='Price' />
            <button onClick={(e) => onBtnClickAdd(e)}>ADD</button>
        </form>
    );
}

export default Form;
