import React from 'react';
import Value from "./Value/Value";
import {InputErrorType} from "../App";

type DispalyParamsType = {
    inputMaxValue: number
    inputStartValue: number
    setInputStart: (value: number) => void
    setInputMax: (value: number) => void
    checkDisabled: (error: InputErrorType) => void
    error: InputErrorType
    setInputStateChanger:(inputState:boolean)=>void
}

const DisplayParams = (props: DispalyParamsType) => {

    let inputMaxError = props.error === "maxError" || props.error ==="all"
    let inputStartError = props.error === "startError" || props.error ==="all"

    return (
        <div className="display_wrapper display_params">
            <Value title="max value:"
                   setValue={props.setInputMax}
                   inputValue={props.inputMaxValue}
                   error={inputMaxError}
                   checkDisabled={props.checkDisabled}
                   setInputStateChanger={props.setInputStateChanger}/>
            <Value title="start value:"
                   setValue={props.setInputStart}
                   inputValue={props.inputStartValue}
                   error={inputStartError}
                   checkDisabled={props.checkDisabled}
                   setInputStateChanger={props.setInputStateChanger}/>
        </div>
    );
};

export default DisplayParams;