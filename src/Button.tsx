import React from 'react';

type UniButtonPropsType = {
    title: string
    function: () => void
    isDisabled: boolean
    class?:string
}

const Button = (props: UniButtonPropsType) => {


    return (
        <>
            <button onClick={props.function}
                    disabled={props.isDisabled}
                    className={`${props.class} button`}>{props.title}</button>
        </>
    );
};

export default Button;