import React from "react";
import "./Board.css";
import Row from "../Row/Row";
import Button from "../Button/Button";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],
    };

    this.solveSudoku = this.solveSudoku.bind(this);
    this.demo1 = this.demo1.bind(this);
    this.demo2 = this.demo2.bind(this);
    this.reset = this.reset.bind(this);
    this.digitInput = this.digitInput.bind(this);
  }

  reset() {
    const clean = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.setState({
      board: clean,
    });
  }

  demo1() {
    const demo1 = [
      [2, 0, 0, 3, 0, 0, 0, 0, 0],
      [8, 0, 4, 0, 6, 2, 0, 0, 3],
      [0, 1, 3, 8, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 2, 0, 3, 9, 0],
      [5, 0, 7, 0, 0, 0, 6, 2, 1],
      [0, 3, 2, 0, 0, 6, 0, 0, 0],
      [0, 2, 0, 0, 0, 9, 1, 4, 0],
      [6, 0, 1, 2, 5, 0, 8, 0, 9],
      [0, 0, 0, 0, 0, 1, 0, 0, 2],
    ];
    this.setState({
      board: demo1,
    });
  }

  demo2() {
    const demo2 = [
      [0, 0, 0, 2, 6, 0, 7, 0, 1],
      [6, 8, 0, 0, 7, 0, 0, 9, 0],
      [1, 9, 0, 0, 0, 4, 5, 0, 0],
      [8, 2, 0, 1, 0, 0, 0, 4, 0],
      [0, 0, 4, 6, 0, 2, 9, 0, 0],
      [0, 5, 0, 0, 0, 3, 0, 2, 8],
      [0, 0, 9, 3, 0, 0, 0, 7, 4],
      [0, 4, 0, 0, 5, 0, 0, 3, 6],
      [7, 0, 3, 0, 1, 8, 0, 0, 0],
    ];
    this.setState({
      board: demo2,
    });
  }

  solveSudoku() {
    let grid = this.state.board;
    let grid2 = this.state.board;
    let solutionNum = 0;

    function convert() {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          grid[i][j] = Number(grid[i][j]);
        }
      }
    }

    function checkValidInput() {
      convert();
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          let temp = grid[i][j];
          if (temp > 9 || temp < 0 || isNaN(temp) === true) {
            return false;
          }
        }
      }
      return true;
    }

    function checkDuplicate() {
      for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
          let val = grid[x][y];
          if (val !== 0) {
            let counter = 0;
            for (let i = 0; i < 9; i++) {
              if (grid[i][y] === val) {
                counter++;
              }
              if (grid[x][i] === val) {
                counter++;
              }
            }
            const x0 = Math.floor(x / 3) * 3;
            const y0 = Math.floor(y / 3) * 3;
            for (let i = 0; i < 3; i++) {
              for (let j = 0; j < 3; j++) {
                if (grid[x0 + i][y0 + j] === val) {
                  counter++;
                }
              }
            }
            if (counter > 3) {
              return false;
            }
          }
        }
      }
      return true;
    }

    function possible(x, y, n) {
      for (let i = 0; i < 9; i++) {
        if (grid[i][y] === n) {
          return false;
        }
        if (grid[x][i] === n) {
          return false;
        }
      }
      const x0 = Math.floor(x / 3) * 3;
      const y0 = Math.floor(y / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[x0 + i][y0 + j] === n) {
            return false;
          }
        }
      }
      return true;
    }

    function isSolved() {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] === 0) {
            return false;
          }
        }
      }
      return true;
    }

    function getCount() {
      if (isSolved() === true) {
        return true;
      }

      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] === 0) {
            for (let n = 1; n < 10; n++) {
              if (possible(i, j, n) === true) {
                grid[i][j] = n;
                if (getCount() === true) {
                  solutionNum++;
                  if (solutionNum > 1) {
                    break;
                  }
                  grid[i][j] = 0;
                  return false;
                }
                grid[i][j] = 0;
              }
            }
            return false;
          }
        }
      }
    }

    function solve() {
      if (isSolved() === true) {
        return true;
      }
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] === 0) {
            for (let n = 1; n < 10; n++) {
              if (possible(i, j, n) === true) {
                grid[i][j] = n;
                if (solve() === true) {
                  return true;
                }
                grid[i][j] = 0;
              }
            }
            return false;
          }
        }
      }
    }

    // Count how many possible solutions
    const boo1 = checkValidInput();
    const boo2 = checkDuplicate();
    if (boo1 === false) {
      alert(
        "Invalid inputs.\nIntegers should be between 1 - 9.\nNo special characters allowed."
      );
      return;
    }
    if (boo2 === false) {
      alert(
        "Invalid inputs. Repetitive values exist.\nDouble check that inputs are correct."
      );
      return;
    }
    if (boo1 === true && boo2 === true) {
      getCount();
      grid = grid2;
      convert();
      if (solutionNum < 1) {
        alert(
          "There is no possible solution to this sudoku.\nPlease make sure the sudoku is solvable."
        );
        return false;
      } else if (solutionNum === 1) {
        solve();
        this.setState({
          board: grid,
        });
        return true;
      } else {
        alert(
          "There are more than one solution.\nPlease check the sudoku is valid."
        );
        this.reset();
        return false;
      }
    }
  }

  digitInput(x, y, n) {
    let tempBoard = this.state.board;
    tempBoard[x][y] = n;
    this.setState({
      board: tempBoard,
    });
  }

  render() {
    return (
      <div>
        <div className="board">
          <Row method={this.digitInput} row={0} data={this.state.board[0]} />
          <Row method={this.digitInput} row={1} data={this.state.board[1]} />
          <Row method={this.digitInput} row={2} data={this.state.board[2]} />
        </div>
        <div className="board">
          <Row method={this.digitInput} row={3} data={this.state.board[3]} />
          <Row method={this.digitInput} row={4} data={this.state.board[4]} />
          <Row method={this.digitInput} row={5} data={this.state.board[5]} />
        </div>
        <div className="board">
          <Row method={this.digitInput} row={6} data={this.state.board[6]} />
          <Row method={this.digitInput} row={7} data={this.state.board[7]} />
          <Row method={this.digitInput} row={8} data={this.state.board[8]} />
        </div>
        <Button method={this.solveSudoku} text="Solve this Sudoku!" />
        <Button method={this.reset} text="Reset the board" />
        <Button method={this.demo1} text="Demo Sudoku1" />
        <Button method={this.demo2} text="Demo Sudoku2" />
      </div>
    );
  }
}

export default Board;
