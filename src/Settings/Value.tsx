import React, {ChangeEvent} from 'react';
import style from "./Value.module.css"

type ValuePropsType = {
    maxValueInput: (inputText: number) => void,
    startValueInput: (inputText: number) => void,
    maxValueInp:number,
    startValueInp:number,
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
                <input type='number' onChange={inputMaxValueChangeHandler}/>
            </div>
            <div>start value:
                <input type='number' onChange={inputStartValueChangeHandler}/>
            </div>

        </div>
    );
};

export default Value;