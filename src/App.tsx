import React, {useEffect, useState} from 'react';
import './App.css';
import Output from "./Output/Output";
import Increment from "./Counter/Increment";
import Reset from "./Counter/Reset";
import style from "./App.module.css"
import Value from "./Settings/Value";
import SetBtn from "./Settings/SetBtn";


function App() {
    const [maxValueInp, setMaxValueInp] = useState('')
    const [startValueInp,setStartValueInp]=useState('')

    const maxValueInput = (inputText: string) => {
        setMaxValueInp(inputText)
    }


    let startValue = 2;
    let maxValue = 10;

    const [counter, setCounter] = useState<number>(startValue)


    useEffect(() => {
        let counterAsString = localStorage.getItem('counterValue')
        if (counterAsString) {
            let newCounter = JSON.parse(counterAsString)
            setCounter(newCounter)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])

    const changeCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetOutput = () => {
        setCounter(0)
    }

    return (
        <div className={style.App}>

            <div>maxV={maxValueInp}</div>
            <p>startV={startValueInp}</p>

            <div className={style.counter}>

                <Value maxValueInput={maxValueInput}/>

                <div className={style.btn}>

                    <SetBtn/>

                </div>

            </div>
            {/*------------------------------------------*/}
            <div className={style.counter}>
                <Output counter={counter} maxValue={maxValue}/>
                <div className={style.btn}>
                    <Increment title={'inc'} counter={counter} maxValue={maxValue} changeCounter={changeCounter}/>
                    <Reset title={'reset'} counter={counter} resetOutput={resetOutput}/>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
