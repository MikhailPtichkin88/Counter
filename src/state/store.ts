import {applyMiddleware, combineReducers, createStore} from "redux";
import {paramsReducer} from "./params-reducer";
import {counterReducer} from "./counter-reducer";
import thunk from 'redux-thunk';
import {loadState, saveState} from "../utils/localStorageUtils";


const rootReducer = combineReducers({
    params: paramsReducer,
    counter: counterReducer,
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        params: store.getState().params
    });
});

export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store


// @ts-ignore
window.store = store
