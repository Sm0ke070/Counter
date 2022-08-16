import React, {useState} from 'react';

const App2 = () => {
    const [value, setValue] = useState(0)
    const incHandler = () => {
        setValue(value + 1)
    }
    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }

    const getFromToLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const clearLocalStorageHandler = ( ) => {
localStorage.clear()
        setValue(0)
    }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>set-{value}</button>
            <button onClick={getFromToLocalStorageHandler}>getFromToLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
        </div>
    );
};

export default App2;