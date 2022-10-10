import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import Output from "./Output";
import style from "./Output.module.css"

type OutputContainerType = {
    counter: number,
    startValue: number
    maxValue: number
    show: boolean
}

const OutputContainer = (props: OutputContainerType) => {
    let styles = props.startValue >= props.maxValue || props.startValue < 0 || props.counter >= props.maxValue ? style.maxValue : style.minValue


    return <>
        <Output counter={props.counter}
                styles={styles}
                show={props.show}/>
    </>

}

type mapStateToPropsType = {
    counter: number
    startValue: number
    maxValue: number
    show: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        counter: state.counterState.counter,
        startValue: state.counterState.startValue,
        maxValue: state.counterState.maxValue,
        show: state.counterState.show,
    }
}


export default connect(mapStateToProps)(OutputContainer)
