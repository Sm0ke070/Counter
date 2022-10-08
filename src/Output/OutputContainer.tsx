import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import Output from "./Output";
import style from "./Output.module.css"

type OutputContainerType = {
    counter: number,
    startValue: number
    maxValue: number
}

const OutputContainer = (props: OutputContainerType) => {
    let styles = props.startValue >= props.maxValue || props.startValue < 0 || props.counter >= props.maxValue ? style.maxValue : style.minValue


    return <>
        <Output counter={props.counter}
                styles={styles}/>
    </>

}

type mapStateToPropsType = {
    counter: number,
}
const mapStateToProps = (state: AppStateType): OutputContainerType => {
    return {
        counter: state.counterState.counter,
        startValue: state.counterState.startValue,
        maxValue: state.counterState.maxValue,
    }
}


export default connect(mapStateToProps)(OutputContainer)
