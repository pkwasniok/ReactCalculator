import React, { useState } from 'react';

import Button from './Button';

function NumPad(props) {

    return (
        <table class={"table"}>
            <tr class={"table-row"}>
                <td class={"table-d"}><Button value={"7"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"8"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"9"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"+"} onClick={(value) => props.onClick(value)} /></td>
            </tr>
            <tr class={"table-row"}>
                <td class={"table-d"}><Button value={"4"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"5"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"6"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"-"} onClick={(value) => props.onClick(value)} /></td>
            </tr>
            <tr class={"table-row"}>
                <td class={"table-d"}><Button value={"1"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"2"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"3"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"x"} onClick={(value) => props.onClick(value)} /></td>
            </tr>
            <tr class={"table-row"}>
                <td class={"table-d"}><Button value={"0"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"."} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"="} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"/"} onClick={(value) => props.onClick(value)} /></td>
            </tr>
            <tr>
                <td class={"table-d"}><Button value={"CA"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"MR"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"M+"} onClick={(value) => props.onClick(value)} /></td>
                <td class={"table-d"}><Button value={"M-"} onClick={(value) => props.onClick(value)} /></td>
            </tr>
        </table>
    );
}

export default NumPad;