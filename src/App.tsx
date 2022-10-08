import React, {useState} from 'react';
import './App.css';
import Output from "./Output/Output";
import Increment from "./Button/Increment";
import Reset from "./Button/Reset";
import style from "./App.module.css"
import Value from "./Settings/Value";
import SetBtn from "./Settings/SetBtn";
import GlobalButtonContainer from "./Button/GlobalButtonContainer";
import OutputContainer from "./Output/OutputContainer";
import GlobalButton from "./Button/globalButton";
import ValueContainer from "./Settings/ValueContainer";


type AppType = {}

const App: React.FC<AppType> = (props) => {

    const [maxValueInp, setMaxValueInp] = useState(5)

    const [startValueInp, setStartValueInp] = useState(0)

    const [OLDcounter, setOLDcounter] = useState<any>(0)

    const isValid = startValueInp < maxValueInp || startValueInp > maxValueInp || startValueInp === maxValueInp

    const maxValueInput = (inputValue: number) => {
        setMaxValueInp(inputValue)
        if (inputValue > startValueInp) {
            setOLDcounter("enter values and press 'set'")
        } else setOLDcounter("Incorrect value!")

    }

    const startValueInput = (inputValue: number) => {
        setStartValueInp(inputValue)
        if (inputValue >= maxValueInp || inputValue < 0) {
            setOLDcounter("Incorrect value!")
        } else setOLDcounter("enter values and press 'set'")
    }

    const changeSettings = () => {
        setOLDcounter(startValueInp)
        localStorage.setItem('StartValue', JSON.stringify(startValueInp))
        localStorage.setItem('MaxValue', JSON.stringify(maxValueInp))
    }

    const changeCounter = () => {
        if (OLDcounter < maxValueInp) {
            setOLDcounter(+OLDcounter + 1)
            console.log("IncrementBtnClick")
        }
    }
    const resetOutput = () => {
        setOLDcounter(startValueInp)
    }

    // useEffect(() => {
    //     let StartValue = localStorage.getItem('StartValue')
    //     let MaxValue = localStorage.getItem('MaxValue')
    //     if (StartValue) {
    //         setStartValueInp(+StartValue)
    //     }
    //     if (MaxValue) {
    //         setMaxValueInp(+MaxValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     setCounter(localStorage.getItem('StartValue'))
    // }, [])

    return (
        <div className={style.App}>

            <div className={style.counter}>

                <ValueContainer/>

                {/*<Value maxValueInput={maxValueInput}*/}
                {/*       startValueInput={startValueInput}*/}
                {/*       startValueInp={startValueInp}*/}
                {/*       maxValueInp={maxValueInp}/>*/}

                <div className={style.btn}>
                    <SetBtn startValueInp={startValueInp}
                            maxValueInp={maxValueInp}
                            changeSettings={changeSettings}/>
                </div>
            </div>

            {/*------------------------------------------*/}

            <div className={style.counter}>
                <OutputContainer/>
                {/* <Output maxValueInp={maxValueInp}
                        startValueInp={startValueInp}
                        counter={OLDcounter}
                        isValid={isValid}

                />*/}
                <div className={style.btn}>

                    <GlobalButtonContainer/>

                    {/*<Increment title={'old-inc'}*/}
                    {/*           counter={counter}*/}
                    {/*           maxValueInp={maxValueInp}*/}
                    {/*           changeCounter={changeCounter}/>*/}

                    {/*<Reset title={'old-reset'}*/}
                    {/*       counter={counter}*/}
                    {/*       resetOutput={resetOutput}*/}
                    {/*       isValid={isValid}*/}
                    {/*       maxValueInp={maxValueInp}/>*/}

                </div>
            </div>
        </div>
    )
        ;
}

export default App;
