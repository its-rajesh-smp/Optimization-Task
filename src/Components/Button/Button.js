import React from 'react';

function Button(props) {

    console.log("BUTTON RENDER");

    const callTitelFunc = () => {
        props.functionChangeTitle()
    }

    return (
        <div className=' Button-div '>
            <button onClick={callTitelFunc}>CLICK</button>
        </div>
    );
}

export default Button;
