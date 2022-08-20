import React, {useEffect, useState} from 'react';
import './App.css';
import Output from "./Output/Output";
import Increment from "./Counter/Increment";
import Reset from "./Counter/Reset";
import style from "./App.module.css"
import Value from "./Settings/Value";
import SetBtn from "./Settings/SetBtn";


function App() {

    const [maxValueInp, setMaxValueInp] = useState(5)

    const [startValueInp, setStartValueInp] = useState(0)

    const [counter, setCounter] = useState<any>(startValueInp)

    const isValid = startValueInp < maxValueInp || startValueInp > maxValueInp || startValueInp === maxValueInp

    const maxValueInput = (inputValue: number) => {
        setMaxValueInp(inputValue)
        if (inputValue > startValueInp) {
            setCounter("enter values and press 'set'")
        } else setCounter("Incorrect value!")

    }
    const startValueInput = (inputValue: number) => {
        setStartValueInp(inputValue)
        if (inputValue >= maxValueInp || inputValue < 0) {
            setCounter("Incorrect value!")
        } else setCounter("enter values and press 'set'")
    }

    const changeSettings = () => {
        setCounter(startValueInp)
        localStorage.setItem('StartValue', JSON.stringify(startValueInp))
        localStorage.setItem('MaxValue', JSON.stringify(maxValueInp))
    }

    useEffect(() => {
        let StartValue = localStorage.getItem('StartValue')
        let MaxValue = localStorage.getItem('MaxValue')
        if (StartValue) {
            setStartValueInp(+StartValue)
        }
        if (MaxValue) {
            setMaxValueInp(+MaxValue)
        }
    }, [])

    useEffect(() => {
        setCounter(localStorage.getItem('StartValue'))
    }, [])

    const changeCounter = () => {
        if (counter < maxValueInp) {
            setCounter(counter + 1)
            console.log("IncrementBtnClick")
        }
    }
    const resetOutput = () => {
        setCounter(startValueInp)
    }

    return (
        <div className={style.App}>

            <div className={style.DELETE}>
                <ul>
                    <li>maxV={maxValueInp}</li>
                    <li>startV={startValueInp}</li>
                    <li>counter={counter}</li>
                </ul>
            </div>

            <div className={style.counter}>

                <Value maxValueInput={maxValueInput}
                       startValueInput={startValueInput}
                       startValueInp={startValueInp}
                       maxValueInp={maxValueInp}/>

                <div className={style.btn}>

                    <SetBtn startValueInp={startValueInp}
                            maxValueInp={maxValueInp}
                            changeSettings={changeSettings}/>
                </div>
            </div>

            {/*------------------------------------------*/}

            <div className={style.counter}>
                <Output maxValueInp={maxValueInp}
                        startValueInp={startValueInp}
                        counter={counter}
                        isValid={isValid}
                />
                <div className={style.btn}>
                    <Increment title={'inc'}
                               counter={counter}
                               maxValueInp={maxValueInp}
                               changeCounter={changeCounter}/>

                    <Reset title={'reset'}
                           counter={counter}
                           resetOutput={resetOutput}
                           isValid={isValid}
                           maxValueInp={maxValueInp}/>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
