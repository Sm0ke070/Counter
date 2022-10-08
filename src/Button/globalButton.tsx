import React from 'react';
import style from "./Btn.module.css";

type GlobalButtonType = {
    incrementValueAC: () => void
    resetValueAC: () => void
    maxValue: number
    counter: number
    disabled: boolean
    styles: string
}

const GlobalButton = (props: GlobalButtonType) => {

    return (
        <div className={style.btn}>

            <button className={props.styles} onClick={props.incrementValueAC}
                    disabled={props.disabled}>
                Inc
            </button>
            <button className={style.IncResSetBtn} onClick={props.resetValueAC}>
                reset
            </button>

        </div>
    );
};

export default GlobalButton;