import React from 'react'

function OutputField(props) {
    return (
        <input
            value={props.output}
            class={"output-field"}
            disabled
        />
    );
}

export default OutputField;