import React from 'react';
import './Digit.css';

const Digit = (props) => {
    
    if (props.col === 8) {
        return (
            <div className='digit2'>
                <input type='text' value={props.data}
                onChange={(event) => {
                    props.change(props.row, props.col, event.target.value);
                }} ></input>
            </div>
        )
    } else if ((props.col % 3) === 2) {
        return (
            <div className='digit'>
                <input type='text' value={props.data}
                onChange={(event) => {
                    props.change(props.row, props.col, event.target.value);
                }} ></input>
            </div>
        )
    } else {
        return (
            <div className='digit2'>
                <input type='text' value={props.data}
                onChange={(event) => {
                    props.change(props.row, props.col, event.target.value);
                }} ></input>
            </div>
        )
    }

    
}

export default Digit
