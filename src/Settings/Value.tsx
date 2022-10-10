import React, {ChangeEvent} from 'react';
import style from "./Value.module.css"

type ValuePropsType = {
    setMaxValueAC: (maxValue: number, isDisabled: boolean) => void,
    setStartValueAC: (startValue: number, isDisabled: boolean) => void,
    startValue: number,
    maxValue: number,
}

const Value = (props: ValuePropsType) => {

    const inputMaxValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let inputValue = +event.currentTarget.value
        if (props.startValue < inputValue && props.startValue >= 0)
            props.setMaxValueAC(+inputValue, false)
        else props.setMaxValueAC(+inputValue, true)
    }

    const inputStartValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let inputValue = +event.currentTarget.value
        if (props.maxValue <= inputValue || inputValue < 0)
            props.setStartValueAC(+inputValue, true)
        else props.setStartValueAC(+inputValue, false)
    }

    return (

        <div className={style.Value}>
            <div>max value:
                <input
                    className={props.maxValue > props.startValue ? style.input : style.errorInput}
                    onChange={inputMaxValueChangeHandler}
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
