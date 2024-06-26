import React, { useState } from "react";
import './SelectableGrid.css';

const SelectableGrid = ({ rows = 10, columns = 15 }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [selectedBoxes, setSelectedBoxes] = useState([]);

    const handleMouseDown = (boxNumber) => {
        setIsMouseDown(true);
        setSelectedBoxes([boxNumber]);
    };

    const handleMouseEnter = (boxNumber) => {
        if (isMouseDown) {
            const startBox = selectedBoxes[0];
            const endBox = boxNumber;

            const startRow = Math.floor((startBox - 1) / columns);
            const startCol = (startBox - 1) % columns;
            const endRow = Math.floor((endBox - 1) / columns);
            const endCol = (endBox - 1) % columns;

            const minRow = Math.min(startRow, endRow);
            const maxRow = Math.max(startRow, endRow);
            const minCol = Math.min(startCol, endCol);
            const maxCol = Math.max(startCol, endCol);

            const selected = [];
            for (let row = minRow; row <= maxRow; row++) {
                for (let col = minCol; col <= maxCol; col++) {
                    selected.push(row * columns + col + 1);
                }
            }
            setSelectedBoxes(selected);
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    return (
        <div
            className="grid"
            style={{ "--rows": rows, "--cols": columns }}
            onMouseUp={handleMouseUp}
        >
            {[...Array(rows * columns).keys()].map((_, i) => (
                <div
                    key={i}
                    className={`box ${selectedBoxes.includes(i + 1) ? "active" : ""}`}
                    onMouseDown={() => handleMouseDown(i + 1)}
                    onMouseEnter={() => handleMouseEnter(i + 1)}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    );
};

export default SelectableGrid;
