import React, {ChangeEvent} from 'react';


type ValueType = {
    title:string
    setValue: (value:number) => void
    inputValue: number
    error:boolean
    setInputStateChanger:()=>void
}

const Value = (props:ValueType) => {



let InputClass = (props.error ? "error_input" : "") + " value_input"
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        // setValue(+e.currentTarget.value)
        props.setInputStateChanger()
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