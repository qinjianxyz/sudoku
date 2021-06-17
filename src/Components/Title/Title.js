import React from "react";
import './Title.css';

const Title = () => {
  return (
    <div className='content'>
      <h3>Sudoku Solver</h3>
      <ul >
        <b>Instructions:</b>
        <li>Input 0 means the value is unknown</li>
        <li>Click "Solve this Sudoku!" when inputs are ready</li>
        <li>All invalid inputs would be rejected</li>
        <li>Click reset to set everything back to 0</li>
        <li>Click Demo to use pre-loaded sudoku.</li>
        <li>Put in your sudoku, and <b>enjoy!</b></li>
      </ul>
    </div>
  );
};

export default Title;
