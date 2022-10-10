import {ActionsType} from "./redux-store";

type initialStateType = {
    counter: number,
    startValue: number,
    maxValue: number,
    disabledIncrement: boolean,
    disabledReset: boolean,
    disabledSet: boolean,
    notification: string,
    error: string,
}
export let initialState = {
    counter: 0,
    startValue: 0,
    maxValue: 5,
    disabledIncrement: true,
    disabledReset: true,
    disabledSet: true,
    notification: "enter values and press 'set'",
    error: "Incorrect value!",
}

const CounterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "INCREMENT-VALUE":
            return {...state, counter: state.counter + 1}
        case "RESET-VALUE":
            return {...state, counter: state.startValue}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.inputMaxValue}
        case "SET-START-VALUE":
            return {...state, startValue: action.inputStartValue}
        case "SET":
            return {...state, counter: state.startValue}
        default:
            return state
    }
};
export const incrementValueAC = () => {
    return {
        type: "INCREMENT-VALUE"
    } as const
}
export const resetValueAC = () => {
    return {
        type: "RESET-VALUE"
    } as const
}
export const setMaxValueAC = (inputMaxValue: number) => {
    return {
        type: "SET-MAX-VALUE",
        inputMaxValue
    } as const
}
export const setStartValueAC = (inputStartValue: number) => {
    return {
        type: "SET-START-VALUE",
        inputStartValue
    } as const
}
export const setInputValueAC = () => {
    return {
        type: "SET",
    } as const
}

export default CounterReducer;