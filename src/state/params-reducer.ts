export type InputErrorType = "maxError" | "startError" | "all" | "none"
// type ParamsType ={
//     inputMaxValue: number,
//     inputStartValue: number,
//     error: InputErrorType,
//     inputState: boolean,
// }

let initialState = {
    inputMaxValue: 7,
    inputStartValue: 0,
    error: "none" as InputErrorType,
    inputState: false,
}
export type ParamsType = typeof initialState

export const paramsReducer = (params: ParamsType = initialState, action: ActionType): ParamsType => {

    switch (action.type) {
        case "CHANGE-MAX-VALUE":
            if (action.payload.value === params.inputStartValue) {
                return {...params, error: "all", inputMaxValue: action.payload.value}

            } else if (action.payload.value < params.inputStartValue || action.payload.value < 0) {
                return {...params, error: "maxError", inputMaxValue: action.payload.value}
            }
            return {...params, error: "none", inputMaxValue: action.payload.value}

        case "CHANGE-START-VALUE":
            if (action.payload.value === params.inputMaxValue) {
                return {...params, error: "all", inputStartValue: action.payload.value}

            } else if (action.payload.value > params.inputMaxValue || action.payload.value < 0) {
                return {...params, error: "startError", inputStartValue: action.payload.value}
            }
            return {...params, error: "none", inputStartValue: action.payload.value}

        case "CHANGE-ERROR":
            return {...params, error: action.payload.error}
        case "CHANGE-INPUT-STATE":
            return {...params, inputState: action.payload.state}
        default:
            return params
    }
}

type ActionType = ChangeMaxValueACType | ChangeStartValueACType | ChangeErrorACType | ChangeInputStateACType

export type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (value: number) => {
    return {
        type: "CHANGE-MAX-VALUE",
        payload: {
            value
        }
    } as const
}

export type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>
export const changeStartValueAC = (value: number) => {
    return {
        type: "CHANGE-START-VALUE",
        payload: {
            value
        }
    } as const
}

type ChangeErrorACType = ReturnType<typeof changeErrorAC>
export const changeErrorAC = (error: InputErrorType) => {
    return {
        type: "CHANGE-ERROR",
        payload: {
            error
        }
    } as const
}

type ChangeInputStateACType = ReturnType<typeof changeInputStateAC>
export const changeInputStateAC = (state: boolean) => {
    return {
        type: "CHANGE-INPUT-STATE",
        payload: {
            state
        }
    } as const
}