import React, {ChangeEvent, ChangeEventHandler} from 'react';
import style from "./Value.module.css"

type ValuePropsType = {
    setMaxValueAC: (maxValue: number) => void,
    setStartValueAC: (startValue: number) => void,
    startValue: number,
    maxValue: number,
}

const Value = (props: ValuePropsType) => {

    const inputMaxValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.currentTarget.value
        props.setMaxValueAC(+inputValue)
    }

    const inputStartValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.currentTarget.value
        props.setStartValueAC(+inputValue)
    }

    return (
        <div className={style.Value}>
            <div>max value:
                <input
                    className={props.maxValue > props.startValue ? style.input : style.errorInput}
                    onChange={inputMaxValueChangeHandler }
                    value={props.maxValue}
                    type='number'/>

            </div>
            <div>
                start value:
                <input
                    className={props.startValue < 0 || props.startValue >= props.maxValue ? style.errorInput : style.input}
                    onChange={inputStartValueChangeHandler}
                    value={props.startValue}
                    type='number'/>
            </div>
        </div>
    );
};

export default Value;

// const inputMaxValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//     let inputValue = event.currentTarget.value
//     props.maxValueInput(+inputValue)
// }
// const inputStartValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//     let inputValue = event.currentTarget.value
//     props.startValueInput(+inputValue)
// }