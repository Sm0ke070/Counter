import React from 'react';
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import SetBtn from "./SetBtn";
import {setInputValueAC} from "../redux/counterReducer";

type SetBtnContainerType = {
    setInputValueAC: () => void
    disabledSet: boolean
    startValue: number
    maxValue: number
}

const SetBtnContainer = (props: SetBtnContainerType) => {
    return (
        <>
            <SetBtn setInputValueAC={props.setInputValueAC}
                    disabledSet={props.disabledSet}
                    startValue={props.startValue}
                    maxValue={props.maxValue}/>

        </>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        disabledSet: state.counterState.disabledSet,
        startValue: state.counterState.startValue,
        maxValue: state.counterState.maxValue
    }
}

export default connect(mapStateToProps, {
    setInputValueAC,
})(SetBtnContainer);