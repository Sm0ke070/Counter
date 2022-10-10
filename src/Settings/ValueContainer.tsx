import React from 'react';
import {connect} from "react-redux";
import Value from "./Value";
import {setMaxValueAC, setStartValueAC} from "../redux/counterReducer";
import {AppStateType} from "../redux/redux-store";

type ValueContainerType = {
    maxValue: number,
    startValue: number,
    setMaxValueAC: (maxValue: number,isDisabled:boolean) => void,
    setStartValueAC: (startValue: number, isDisabled: boolean) => void,
}

const ValueContainer = (props: ValueContainerType) => {

    return (
        <>
            <Value setStartValueAC={props.setStartValueAC}
                   setMaxValueAC={props.setMaxValueAC}
                   startValue={props.startValue}
                   maxValue={props.maxValue}
            />
        </>
    );
};
type mapStateToPropsType = {
    startValue: number,
    maxValue: number,
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        startValue: state.counterState.startValue,
        maxValue: state.counterState.maxValue,
    }
}

export default connect(mapStateToProps, {
    setStartValueAC,
    setMaxValueAC,
})(ValueContainer);