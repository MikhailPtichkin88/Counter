import React from 'react';
import Button from "../Button";
import Display from './Display'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../state/store";
import {CounterType, increaseCountAC, resetCountAC} from "../state/counter-reducer";
import {ParamsType} from "../state/params-reducer";


const Counter = () => {
    const params = useSelector<RootStateType, ParamsType>(state=>state.params)
    const counter = useSelector<RootStateType, CounterType>(state=>state.counter)
    const dispatch = useDispatch()

    function increaseCount(){
        dispatch(increaseCountAC())
    }
    function resetCount(){
        dispatch(resetCountAC(params.inputStartValue))
    }

    let isIncDisabled = params.inputState || (counter.count === params.inputMaxValue)
    let isResetDisabled = params.inputState || (counter.count === params.inputStartValue)
    return (

        <div className="counter">
            <Display count={counter.count}
                     error={params.error}
                     maxCount={params.inputMaxValue}
                     startCount={params.inputStartValue}
                     inputState={params.inputState}/>
            <div className="buttons_wrapper">
                <Button title="Incr"
                        function={increaseCount}
                        isDisabled={isIncDisabled}/>
                <Button title="Reset"
                        function={resetCount}
                        isDisabled={isResetDisabled}/>
            </div>
        </div>
    );
};

export default Counter;