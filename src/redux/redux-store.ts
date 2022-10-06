import {combineReducers, createStore} from "redux";
import CounterReducer, {incrementValueAC, resetValueAC, setMaxValueAC, setStartValueAC} from "./counterReducer";

let rootReducer = combineReducers({
        initialState: CounterReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionsType =
    ReturnType<typeof incrementValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>

let store = createStore(rootReducer);

export default store