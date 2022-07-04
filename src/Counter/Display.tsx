import React from 'react';
import '../App.css'
import {InputErrorType} from "../state/params-reducer";


type DisplayPropsType = {
    count: number
    error:InputErrorType
    maxCount: number
    startCount:number
    inputState:boolean
}

const Display = (props: DisplayPropsType) => {

    let title:number | string = props.startCount;

    if(props.inputState) {
        title = "enter values and press set"
    }else{
        title=props.count
    }
    if(props.error !== 'none')
        title = "Incorrect value"


    let a = "count_num"
    if (props.count === props.maxCount || props.error !== 'none') {
        a += " disabled"
    } else if(props.inputState){
        a += " fontSize"
    }

    return (
        <div className="display_wrapper">
            <span className={a}>{title}</span>
        </div>
    );
};

export default Display;