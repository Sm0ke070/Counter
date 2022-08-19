import React from 'react';
import style from "./SetBtn.module.css"

type SetBtnPropsType = {
    startValueInp: number,
    maxValueInp:number,
    changeSettings:()=>void,
}

const SetBtn = (props: SetBtnPropsType) => {


    return (
        <div className={style.containerSetBtn}>
            <button className={props.startValueInp < 0 || props.startValueInp>=props.maxValueInp ? style.inactiveBtn : style.setBtn}
                    disabled={props.startValueInp < 0 || props.startValueInp>=props.maxValueInp}
                    onClick={props.changeSettings}> set
            </button>
        </div>

    );
};

export default SetBtn;