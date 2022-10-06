import React from 'react';



const GlobalButton = ({...props}) => {
    return (
        <div>

            <button onClick={props.increment}>+1</button>
            <button onClick={props.reset}>reset</button>
            <p>{props.counter}</p>
        </div>
    );
};

export default GlobalButton;