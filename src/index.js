import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { SendDataProvider } from './Context/sendDataContext';
import { CartDataProvider } from './Context/cartDataContext';

ReactDOM.render(
    <SendDataProvider>
        <CartDataProvider>
            <App />
        </CartDataProvider>
    </SendDataProvider>
    , document.querySelector("#root")
)
