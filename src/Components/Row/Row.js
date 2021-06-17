import React from 'react'
import './Row.css';
import Digit from '../Digit/Digit'

const Row = (props) => {
    return (
        <div className="row">
            <Digit change={props.method} row={props.row} col={0} data={props.data[0]} />
            <Digit change={props.method} row={props.row} col={1} data={props.data[1]} />
            <Digit change={props.method} row={props.row} col={2} data={props.data[2]} />
            <Digit change={props.method} row={props.row} col={3} data={props.data[3]} />
            <Digit change={props.method} row={props.row} col={4} data={props.data[4]} />
            <Digit change={props.method} row={props.row} col={5} data={props.data[5]} />
            <Digit change={props.method} row={props.row} col={6} data={props.data[6]} />
            <Digit change={props.method} row={props.row} col={7} data={props.data[7]} />
            <Digit change={props.method} row={props.row} col={8} data={props.data[8]} />
        </div>
    )
}

export default Row
