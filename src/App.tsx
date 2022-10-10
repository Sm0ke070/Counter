import React, {useState} from 'react';
import './App.css';
import style from "./App.module.css"
import GlobalButtonContainer from "./Button/GlobalButtonContainer";
import OutputContainer from "./Output/OutputContainer";
import ValueContainer from "./Settings/ValueContainer";
import SetBtnContainer from "./Settings/SetBtnContainer";


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

                <div className={style.btn}>
                    <SetBtnContainer/>
                </div>
            </div>
            {/*------------------------------------------*/}
            <div className={style.counter}>

                <OutputContainer/>

                <div className={style.btn}>

                    <GlobalButtonContainer/>

                </div>
            </div>
        </div>
    );
}
export default App;
