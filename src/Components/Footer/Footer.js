import React from 'react';

const Footer = () => {

    let d = new Date();
    let currentYear = d.getFullYear();
    let display = "Copyright© " + currentYear + ", Jian Qin";

    return (
        <div style={{textAlign:'center'}}>
            <hr />
            <p>{display}</p>
            <p>All rights reserved.</p>
            <a href='https://qinjian.xyz'><i>Learn more</i></a>
            <div style={{height:'30px'}}></div>
        </div>
    )
}

export default Footer
