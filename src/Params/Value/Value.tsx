import React, {ChangeEvent} from 'react';
import {InputErrorType} from "../../App";

type ValueType = {
    title:string
    setValue: (value:number) => void
    inputValue: number
    error:boolean
    checkDisabled: (error:InputErrorType) => void
    setInputStateChanger:(inputState:boolean)=>void
}

const Value = (props:ValueType) => {

let InputClass = (props.error ? "error_input" : "") + " value_input"
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        props.setInputStateChanger(false)
        props.setValue(+e.currentTarget.value)
    }

    return (
        <div className="value_wrapper">
            <span className="value_title">{props.title}</span>
            <input onChange={onChangeHandler}
                   value={props.inputValue}
                   className={InputClass}
                   type="number"/>
        </div>
    );
};

export default Value;