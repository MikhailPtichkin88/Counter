import React from 'react';
import Button from "../Button";
import Display from './Display'
import {InputErrorType} from "../App";

type CounterPropsType = {
    increaseCount: () => void
    resetCount: () => void
    maxCount: number
    startCount: number
    count: number
    error: InputErrorType
    inputState: boolean
}

const Counter = (props: CounterPropsType) => {

    let isResetDisabled = !props.inputState || (props.count === props.startCount)
    return (

        <div className="counter">
            <Display count={props.count}
                     error={props.error}
                     maxCount={props.maxCount}
                     startCount={props.startCount}
                     inputState={props.inputState}/>
            <div className="buttons_wrapper">
                <Button title="Incr"
                        function={props.increaseCount}
                        isDisabled={!props.inputState}/>
                <Button title="Reset"
                        function={props.resetCount}
                        isDisabled={isResetDisabled}/>
            </div>
        </div>
    );
};

export default Counter;