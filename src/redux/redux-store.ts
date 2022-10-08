import {combineReducers, createStore} from "redux";
import CounterReducer, {
    incrementValueAC,
    resetValueAC,
    setInputValueAC,
    setMaxValueAC,
    setStartValueAC
} from "./counterReducer";

let rootReducer = combineReducers({
        counterState: CounterReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionsType =
    ReturnType<typeof incrementValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setInputValueAC>

let store = createStore(rootReducer);

export default store