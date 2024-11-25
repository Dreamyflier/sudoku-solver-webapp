import React, { useState } from "react";
import { solveSudoku } from "../utils/SudokuSolver"; // Import the solver logic
import "./SudokuGrid.css"; // Import the CSS for styling

const SudokuGrid = () => {
    // Initial state of the grid (0 represents empty cells)
    const [grid, setGrid] = useState([
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ]);

    // Function to solve the Sudoku puzzle
    const handleSolve = () => {
        const gridCopy = JSON.parse(JSON.stringify(grid)); // Deep copy the grid
        if (solveSudoku(gridCopy)) {
            setGrid(gridCopy); // Update the grid with the solved solution
        } else {
            alert("No solution exists!"); // Alert if the puzzle is unsolvable
        }
    };

    // Function to handle input changes (optional for making grid interactive)
    const handleInputChange = (e, rowIndex, colIndex) => {
        const value = parseInt(e.target.innerText) || 0; // Get input value or set to 0
        if (value >= 0 && value <= 9) {
            const newGrid = JSON.parse(JSON.stringify(grid));
            newGrid[rowIndex][colIndex] = value;
            setGrid(newGrid);
        } else {
            e.target.innerText = grid[rowIndex][colIndex] || ""; // Reset invalid input
        }
    };

    return (
        <div>
            <button onClick={handleSolve} style={{ marginBottom: "10px" }}>
                Solve
            </button>
            <div className="sudoku-container">
                <div className="sudoku-grid">
                    {grid.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className="sudoku-cell"
                                contentEditable={cell === 0} // Make only empty cells editable
                                suppressContentEditableWarning // Suppress React warnings for contentEditable
                                onInput={(e) =>
                                    handleInputChange(e, rowIndex, colIndex)
                                }
                            >
                                {cell !== 0 ? cell : ""}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default SudokuGrid;
