import React from 'react'

function Button(props) {
    return (
        <button
            onClick={() => props.onClick(props.value)}
            class={"basic-button"}
        >
            {props.value}
        </button>
    );
}

export default Button;