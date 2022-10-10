import React from 'react';
import style from "./SetBtn.module.css"

type SetBtnPropsType = {
    startValueInp: number,
    maxValueInp: number,
    changeSettings: () => void,
}

const SetBtnOLD = (props: SetBtnPropsType) => {


    return (
        <div className={style.containerSetBtn}>
            <button
                className={props.startValueInp < 0 || props.startValueInp >= props.maxValueInp ? style.disabledBtn : style.setBtn}
                disabled={props.startValueInp < 0 || props.startValueInp >= props.maxValueInp}
                onClick={props.changeSettings}> set-OLD
            </button>
        </div>

    );
};

export default SetBtnOLD;