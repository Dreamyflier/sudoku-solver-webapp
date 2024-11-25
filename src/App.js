import React from "react";
import SudokuGrid from "./components/SudokuGrid";  // Path to your component

const App = () => {
  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <SudokuGrid />
    </div>
  );
};

export default App;
