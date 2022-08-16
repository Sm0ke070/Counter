import React from 'react';
import style from "./SetBtn.module.css"


const SetBtn = () => {
    return (
        <div className={style.containerSetBtn}>
            <button className={style.setBtn}>set</button>
        </div>
    );
};

export default SetBtn;