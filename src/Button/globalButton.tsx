import React from 'react';
import style from "./Btn.module.css";

type GlobalButtonType = {
    title: string,
    counter: number,
    callback: () => void,
}

const GlobalButton = (props: GlobalButtonType) => {
    return (
        <div className={style.btn}>

            <button className={style.IncResSetBtn} onClick={props.callback}>{props.title}</button>

            <p>{props.counter}</p>

        </div>
    );
};

export default GlobalButton;