import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import Params from "./Params/Params";

export type InputErrorType = "maxError" | "startError" | "all" | "none"

function App() {

    let localStorageMaxCountString = localStorage.getItem('maxCountValue')
    let localStorageMaxCount = localStorageMaxCountString ? JSON.parse(localStorageMaxCountString) : 7

    let localStorageStartCountString = localStorage.getItem('startCountValue')
    let localStorageStartCount = localStorageStartCountString ? JSON.parse(localStorageStartCountString) : 0

    let localStorageCountString = localStorage.getItem('count')
    let localStorageCount = localStorageCountString ? JSON.parse(localStorageCountString) : localStorageStartCount

    const [maxCount, setMaxCount] = useState<number>(localStorageMaxCount)
    const [startCount, setStartCount] = useState<number>(localStorageStartCount)
    const [inputMaxValue, setInputMaxValue] = useState<number>(localStorageMaxCount)
    const [inputStartValue, setInputStartValue] = useState<number>(localStorageStartCount)
    const [count, setCount] = useState<number>(localStorageCount)
    const [error, setError] = useState<InputErrorType>("none")
    const [inputState, setInputState] = useState<boolean>(true)

    const minValue = -1
    const maxValue = 99

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
        if (value > inputMaxValue || value < 0) {
            checkDisabled("startError")
        } else if (value === inputMaxValue) {
            checkDisabled("all")
        } else {
            checkDisabled("none")
        }
        if (value <= maxValue && value >= minValue)
            setInputStartValue(value)
        localStorage.setItem('count', JSON.stringify(value))
        setCount(value)
    }

    function increaseCount() {
        let newCount = count
        if (newCount < maxCount) {
            setCount(newCount + 1)
            localStorage.setItem('count', JSON.stringify(newCount + 1))
        }
    }

    function resetCount() {
        setCount(startCount)
        localStorage.setItem('count', JSON.stringify(startCount))
    }

    function checkDisabled(error: InputErrorType) {
        setError(error)
    }

    function setValues() {
        setMaxCount(inputMaxValue)
        setStartCount(inputStartValue)
        setCount(inputStartValue)
        setInputState(true)
        localStorage.setItem('maxCountValue', JSON.stringify(inputMaxValue))
        localStorage.setItem('startCountValue', JSON.stringify(inputStartValue))
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
                    error={error}
                    setInputStateChanger={setInputStateChanger}
                    inputState={inputState}/>
            <Counter error={error}
                     count={count}
                     increaseCount={increaseCount}
                     resetCount={resetCount}
                     maxCount={maxCount}
                     startCount={startCount}
                     inputState={inputState}/>
        </div>
    )
}

export default App;
