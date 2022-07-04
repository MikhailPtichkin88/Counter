import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Params from "./Params/Params";

export type InputErrorType = "maxError" | "startError" | "all" | "none"

function App() {

    const [count, setCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(7)
    const [startCount, setStartCount] = useState<number>(0)
    const [inputMaxValue, setInputMaxValue] = useState(maxCount)
    const [inputStartValue, setInputStartValue] = useState(startCount)
    const [error, setError] = useState<InputErrorType>("none")
    const [inputState, setInputState] = useState<boolean>(false)
    const minValue = -1
    const maxValue = 999

    function setInputMax(value: number) {
        if (value < inputStartValue || value < 0) {
            checkDisabled("maxError")
        } else if (value === inputStartValue) {
            checkDisabled("all")
        } else {
            checkDisabled("none")
        }
        if (value <= maxValue && value >= minValue)
            setInputMaxValue(value)
    }

    function setInputStart(value: number) {
        if (value > inputMaxValue || value === inputMaxValue || value < 0) {
            checkDisabled("startError")
        } else if (value === inputMaxValue) {
            checkDisabled("all")
        } else {
            checkDisabled("none")
        }
        if (value <= maxValue && value >= minValue)
            setInputStartValue(value)
    }

    function increaseCount() {
        let newCount = count
        if (newCount < maxCount) {
            setCount(newCount + 1)
        }
    }

    function resetCount() {
        setCount(startCount)
    }

    function checkDisabled(error: InputErrorType) {
        setError(error)
    }

    function setValues() {
        setMaxCount(inputMaxValue)
        setStartCount(inputStartValue)
        setCount(inputStartValue)
        setInputState(true)
    }

    function setInputStateChanger(inputState: boolean) {
        setInputState(inputState)
    }

    return (
        <div className="App">

            <Params inputMaxValue={inputMaxValue}
                    setInputMax={setInputMax}
                    setValues={setValues}
                    inputStartValue={inputStartValue}
                    setInputStart={setInputStart}
                    checkDisabled={checkDisabled}
                    error={error} setInputStateChanger={setInputStateChanger}
                    inputState={inputState}/>
            <Counter count={count}
                     increaseCount={increaseCount}
                     resetCount={resetCount}
                     startCount={startCount}
                     maxCount={maxCount}
                     error={error}
                     inputState={inputState}/>
        </div>
    )
}

export default App;

