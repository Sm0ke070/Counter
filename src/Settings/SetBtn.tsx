import React from 'react';
import style from "./SetBtn.module.css"

type SetBtnPropsType = {
    startValueInp: number
}

const SetBtn = (props: SetBtnPropsType) => {
    const setClick = () => {
        console.log("SetButtonClick")
    }
    return (
        <div className={style.containerSetBtn}>
            <button className={props.startValueInp < 0 ? style.inactiveBtn : style.setBtn}
                    disabled={props.startValueInp < 0}
                    onClick={setClick}> set
            </button>
        </div>

    );
};

export default SetBtn;