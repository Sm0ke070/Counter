import React from 'react';
import style from "./SetBtn.module.css";

type SetBtnType = {
    setInputValueAC: () => void
    disabledSet: boolean
}

const SetBtn = (props: SetBtnType) => {
    return (
        <div className={style.containerSetBtn}>
            <button className={style.setBtn}
                    onClick={props.setInputValueAC}
                    disabled={props.disabledSet}>
                Set
            </button>
        </div>
    );
};

export default SetBtn;