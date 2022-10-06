import {ActionsType} from "./redux-store";

type initialStateType = {
    counter: number,
    startValue: number,
    maxValue: number,
    incrementBtn: boolean,
    resetBtn: boolean,
    setBtn: boolean,
    notification: string,
    error: string,
}
export let initialState = {
    counter: 0,
    startValue: 0,
    maxValue: 5,
    incrementBtn: true,
    resetBtn: true,
    setBtn: true,
    notification: "enter values and press 'set'",
    error: "Incorrect value!",
}

const CounterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "INCREMENT-VALUE":
            return {...state, counter: state.counter + 1}
        case "RESET-VALUE":
            return {...state, counter: state.startValue}
        case "SET-START-VALUE":
            return {...state, startValue: action.startValue}
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
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
export const setStartValueAC = (startValue: number) => {
    return {
        type: "SET-START-VALUE",
        startValue
    } as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {
        type: "SET-MAX-VALUE",
        maxValue
    } as const
}

export default CounterReducer;