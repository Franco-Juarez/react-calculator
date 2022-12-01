import React from "react";

const Btn = (props) => {
    return (
        <button
        className={`btn`} onClick={() => props.clickAction(props.children)}>
            {props.children}
        </button>
    )
}

export default Btn;