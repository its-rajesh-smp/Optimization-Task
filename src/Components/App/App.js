import React from 'react';
import "./App.css"
import Form from '../Form/Form';
import ProductContainer from '../Product Container/ProductContainer';
import CartBtn from '../CartBtn/CartBtn';

function App(props) {
    return (
        <div className=' App-div '>
            <CartBtn />
            <Form />
            <ProductContainer />
        </div>
    );
}

export default App;
