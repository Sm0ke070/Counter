import React from 'react';
import style from "./Btn.module.css";

type GlobalButtonType = {
    incrementValueAC: () => void
    resetValueAC: () => void
    maxValue: number
    counter: number
    disabled: boolean
    styles: string
    disabledIncrement: boolean
    disabledReset: boolean
}

const GlobalButton = (props: GlobalButtonType) => {

    return (
        <div className={style.btn}>

            <button className={props.disabledIncrement ? style.disabledBtn : props.styles}
                    onClick={props.incrementValueAC}
                    disabled={props.disabled || props.disabledIncrement}>
                Inc
            </button>
            <button className={props.disabledReset ? style.disabledBtn : style.IncResBtn}
                    onClick={props.resetValueAC}
                    disabled={props.disabledReset}>
                reset
            </button>

        </div>
    );
};

export default GlobalButton;