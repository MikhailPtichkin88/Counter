import {ChangeMaxValueACType, ChangeStartValueACType} from "./params-reducer";

export type CounterType = {
    count: number,
}

const initialState = {
    count: 0,
}

export const counterReducer = (counter:CounterType=initialState, action: ActionType):CounterType=>{
    switch(action.type){

        case "CHANGE-COUNT":
            return {...counter, count:action.payload.value}
        case "INCREASE-COUNT":
            return {...counter, count:counter.count + 1}
        case "RESET-COUNT":
            return {...counter, count:action.payload.startValue}
        default:
            return counter
    }
}

type ActionType = ChangeMaxValueACType |ChangeStartValueACType |  ChangeCountACType | IncreaseCountACType | ResetCountACType

type ChangeCountACType = ReturnType<typeof ChangeCountAC>
export const ChangeCountAC = (value:number)=>{
    return {
        type: "CHANGE-COUNT",
        payload:{
            value
        }
    }as const
}

type IncreaseCountACType = ReturnType<typeof increaseCountAC>
export const increaseCountAC = ()=>{
    return {
        type: "INCREASE-COUNT",
    }as const
}

type ResetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = (startValue:number)=>{
    return {
        type: "RESET-COUNT",
        payload:{
            startValue
        }
    }as const
}