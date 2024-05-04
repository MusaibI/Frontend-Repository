import { useState } from 'react'
import './App.css'
import FolderStructure from './components/folder/FolderStructure'
import explorer from './components/data/folderStructure';
import useTraverseTreee from './components/hook/use-traverse-tress';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTreee()

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  }

  return (
    <FolderStructure explorer={explorer} handleInsertNode={handleInsertNode} />
  )
}

export default App
