import {connect} from "react-redux";
import GlobalButton from "./globalButton";
import React from "react";
import {AppStateType} from "../redux/redux-store";
import {incrementValueAC, resetValueAC} from "../redux/counterReducer";


type GlobalButtonContainerType = {
    counter: number,
    resetValueAC: () => void
    incrementValueAC: () => void
}

class GlobalButtonContainer extends React.Component<GlobalButtonContainerType> {


    render() {
        return <>
            <GlobalButton callback={this.props.incrementValueAC}
                          counter={this.props.counter}
                          title={"Inc"}/>

            <GlobalButton callback={this.props.resetValueAC}
                          counter={this.props.counter}
                          title={"reset"}/>

        </>
    }
};

type mapStateToPropsType = {
    counter: number,
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        counter: state.counterState.counter
    }
}

export default connect(mapStateToProps, {
    incrementValueAC,
    resetValueAC
})(GlobalButtonContainer);



// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         increment: () => {
//             dispatch(incrementValueAC())
//         },
//         reset:()=>{
//             dispatch(resetValueAC())
//         }
//     }
// }


