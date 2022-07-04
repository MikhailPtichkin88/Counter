import React from 'react';
import Value from "./Value/Value";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../state/store";
import {changeInputStateAC, changeMaxValueAC, changeStartValueAC, ParamsType} from "../state/params-reducer";

const DisplayParams = () => {

    const params = useSelector<RootStateType, ParamsType>(state => state.params)
    const dispatch = useDispatch()

    function setMaxValue (value:number){
        dispatch(changeMaxValueAC(value))
    }
    function setStartValue (value:number){
        dispatch(changeStartValueAC(value))
    }
    function setInputStateChanger(){
        dispatch(changeInputStateAC(true))
    }

    let inputMaxError = params.error === "maxError" || params.error ==="all"
    let inputStartError = params.error === "startError" || params.error ==="all"

    return (
        <div className="display_wrapper display_params">
            <Value title="max value:"
                   setValue={setMaxValue}
                   inputValue={params.inputMaxValue}
                   error={inputMaxError}
                   setInputStateChanger={setInputStateChanger}/>
            <Value title="start value:"
                   setValue={setStartValue}
                   inputValue={params.inputStartValue}
                   error={inputStartError}
                   setInputStateChanger={setInputStateChanger}/>
        </div>
    );
};

export default DisplayParams;