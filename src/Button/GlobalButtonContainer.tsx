import {connect} from "react-redux";
import GlobalButton from "./globalButton";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {incrementValueAC, resetValueAC} from "../redux/counterReducer";


class GlobalButtonContainer extends React.Component<any, any> {
    componentDidMount() {

    }

    render() {
        return <>
            <GlobalButton {...this.props}/>
        </>
    }
};

type mapStateToPropsType = {
    counter: number
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        counter: state.initialState.counter
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        increment: () => {
            dispatch(incrementValueAC())
        },
        reset:()=>{
            dispatch(resetValueAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalButtonContainer);