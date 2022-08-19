import React, {ChangeEvent} from 'react';
import style from "./Value.module.css"

type ValuePropsType = {
    maxValueInput: (inputText: number) => void,
    startValueInput: (inputText: number) => void,
    maxValueInp: number,
    startValueInp: number,
}

const Value = (props: ValuePropsType) => {

    const inputMaxValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.currentTarget.value
        props.maxValueInput(+inputValue)
    }
    const inputStartValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.currentTarget.value
        props.startValueInput(+inputValue)
    }

    return (
        <div className={style.Value}>
            <div>max value:
                <input
                    className={props.maxValueInp > props.startValueInp ? style.input : style.errorInput}
                    onChange={inputMaxValueChangeHandler}
                    value={props.maxValueInp}
                    type='number'/>

            </div>
            <div>
                start value:
                <input
                    className={props.startValueInp < 0 || props.startValueInp >= props.maxValueInp ? style.errorInput : style.input}
                    onChange={inputStartValueChangeHandler}
                    value={props.startValueInp}
                    type='number'/>
            </div>

        </div>
    );
};

export default Value;