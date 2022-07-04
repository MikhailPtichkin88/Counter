import React from 'react';
import Button from "../Button";
import DisplayParams from "./DisplayParams";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../state/store";
import {changeInputStateAC,  ParamsType} from "../state/params-reducer";
import {ChangeCountAC} from "../state/counter-reducer";


const Params = () => {
    const params = useSelector<RootStateType, ParamsType>(state => state.params)
    const dispatch = useDispatch()

    function setValues(){
        dispatch(changeInputStateAC(false))
        dispatch(ChangeCountAC(params.inputStartValue))
    }

    return (
        <div className="counter">
            <DisplayParams/>
            <div className="buttons_wrapper button_center">
                <Button title="Set"
                        function={setValues}
                        isDisabled={params.error !== 'none' || !params.inputState}
                />
            </div>
        </div>
    );
};

export default Params;