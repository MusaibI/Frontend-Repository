import React, { useState } from "react";
import './Box.css'
const Box = () => {
    const [activeBoxes, setActiveBoxes] = useState([]);

    const onDivClick = (i) => {
        // Check if the box is already active to avoid multiple timeouts for the same box
        if (!activeBoxes.includes(i)) {
            setActiveBoxes((current) => [...current, i]);

            // Set a timeout to remove this box from the active list after 3 seconds
            setTimeout(() => {
                setActiveBoxes((current) => current.filter((box) => box !== i));
            }, 3000);
        }
    };

    return (
        <div className="main-container">
            <h3>Interactive Box Grid</h3>
            <div className="box-container">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className={activeBoxes.includes(i) ? "box active" : "box"}
                        onClick={() => onDivClick(i)}
                    >
                        <span className="number">div{i + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Box;
