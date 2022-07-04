import React from 'react';
import Button from "../Button";
import DisplayParams from "./DisplayParams";
import {InputErrorType} from "../App";

type ParamsType = {
    inputMaxValue:number
    setInputMax: (value:number)=> void
    inputStartValue: number
    setInputStart: (value:number)=>void
    checkDisabled: (error:InputErrorType) => void
    setValues:()=>void
    error:InputErrorType
    setInputStateChanger:(inputState:boolean)=>void
    inputState:boolean
}

const Params = (props: ParamsType) => {
    return (
        <div className="counter">
            <DisplayParams inputMaxValue={props.inputMaxValue}
                           inputStartValue={props.inputStartValue}
                           setInputMax={props.setInputMax}
                           setInputStart={props.setInputStart}
                           checkDisabled={props.checkDisabled}
                           error={props.error}
            setInputStateChanger={props.setInputStateChanger}/>
            <div className="buttons_wrapper button_center">
                <Button title="Set"
                        function={props.setValues}
                        isDisabled={props.error !== 'none' || props.inputState}
                        />
            </div>
        </div>
    );
};

export default Params;