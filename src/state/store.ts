import {combineReducers, createStore} from "redux";
import {paramsReducer} from "./params-reducer";
import {counterReducer} from "./counter-reducer";



const rootReducer = combineReducers({
    params: paramsReducer,
    counter: counterReducer,
})
export const store = createStore(rootReducer)
export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
