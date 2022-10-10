import React from 'react';
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import SetBtn from "./SetBtn";
import {setInputValueAC} from "../redux/counterReducer";

type SetBtnContainerType = {
    setInputValueAC: () => void
    disabledSet: boolean
}

const SetBtnContainer = (props: SetBtnContainerType) => {
    return (
        <>
            <SetBtn setInputValueAC={props.setInputValueAC}
                    disabledSet={props.disabledSet}/>
        </>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        disabledSet: state.counterState.disabledSet
    }
}

export default connect(mapStateToProps, {
    setInputValueAC,
})(SetBtnContainer);