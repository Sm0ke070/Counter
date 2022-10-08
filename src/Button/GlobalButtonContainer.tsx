import {connect} from "react-redux";
import GlobalButton from "./globalButton";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {incrementValueAC, resetValueAC} from "../redux/counterReducer";
import style from "./Btn.module.css"


type GlobalButtonContainerType = {
    resetValueAC: () => void
    incrementValueAC: () => void
    startValue: number
    maxValue: number
    counter: number
}

const GlobalButtonContainer = (props: GlobalButtonContainerType) => {
        let disabled = props.counter >= props.maxValue
        let styles = disabled ? style.inactiveBtn : style.IncResSetBtn
        return <>
            <GlobalButton incrementValueAC={props.incrementValueAC}
                          resetValueAC={props.resetValueAC}
                          maxValue={props.maxValue}
                          counter={props.counter}
                          disabled={disabled}
                          styles={styles}
            />
        </>
    }
;

type mapStateToPropsType = {
    counter: number,
    startValue: number,
    maxValue: number
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        counter: state.counterState.counter,
        startValue: state.counterState.startValue,
        maxValue: state.counterState.maxValue,
    }
}

export default connect(mapStateToProps, {
    incrementValueAC,
    resetValueAC
})(GlobalButtonContainer);

