import React, {ChangeEvent} from 'react';
import style from "./Value.module.css"

type ValuePropsType = {
    maxValueInput: (inputText: string) => void
}

const Value = (props: ValuePropsType) => {
    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let inputValue = event.currentTarget.value
        props.maxValueInput(inputValue)
    }

    return (
        <div className={style.Value}>
            <div>max value:
                <input type='number' onChange={inputChangeHandler}/>
            </div>
            <div>start value:
                <input type='number'/>
            </div>

        </div>
    );
};

export default Value;