import React, { useState } from "react";
const FolderStructure = ({ explorer, handleInsertNode }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        isVisible: false,
        isFolder: null,
    });

    const handleAddNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({ isVisible: true, isFolder });
    }

    const addNewFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({ ...showInput, isVisible: false })
        }
    }

    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>📂 {explorer.name}</span>
                    <div>
                        <button onClick={(e) => handleAddNewFolder(e, true)}>Folder +</button>
                        <button onClick={(e) => handleAddNewFolder(e, false)}>File +</button>
                    </div>
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
                    {showInput.isVisible && (
                        <div className="inputContainer" >
                            <input type="text" placeholder="Enter Input" onBlur={() => setShowInput({ ...showInput, isVisible: false })} onKeyDown={addNewFolder} autoFocus />
                        </div>
                    )}
                    {expand && explorer.item.map(ob => {
                        return (<FolderStructure explorer={ob} handleInsertNode={handleInsertNode} key={ob.id} />)
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className="file" style={{ paddingLeft: 15 }}>🗄️{explorer.name}</div>
        )
    }
};

export default FolderStructure;