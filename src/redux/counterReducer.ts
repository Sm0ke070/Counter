import {ActionsType} from "./redux-store";


type initialStateType = {
    counter: number
    startValue: number
    maxValue: number
    show: boolean
    disabledIncrement: boolean
    disabledReset: boolean
    disabledSet: boolean
}
export const initialState = {
    counter: 0,
    startValue: 0,
    maxValue: 5,
    show: true,
    disabledIncrement: false,
    disabledReset: false,
    disabledSet: false,
}

const CounterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "INCREMENT-VALUE":
            return {...state, counter: state.counter + 1}
        case "RESET-VALUE":
            return {...state, counter: state.startValue}
        case "SET-MAX-VALUE":
            return {
                ...state,
                maxValue: action.inputMaxValue,
                disabledSet: action.isDisabled,
                disabledReset: true,
                disabledIncrement: true,
                show: false
            }
        case "SET-START-VALUE":
            return {
                ...state,
                startValue: action.inputStartValue,
                disabledSet: action.isDisabled,
                disabledReset: true,
                disabledIncrement: true,
                show: false
            }
        case "SET":
            return {
                ...state, counter: state.startValue, disabledSet: true, disabledReset: false,
                disabledIncrement: false, show: true
            }
        default:
            return {...state}
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
export const setMaxValueAC = (inputMaxValue: number, isDisabled: boolean) => {
    return {
        type: "SET-MAX-VALUE",
        inputMaxValue,
        isDisabled,
    } as const
}
export const setStartValueAC = (inputStartValue: number, isDisabled: boolean) => {
    return {
        type: "SET-START-VALUE",
        inputStartValue,
        isDisabled,
    } as const
}
export const setInputValueAC = () => {
    return {
        type: "SET",
    } as const
}

export default CounterReducer;