import './App.css'
import SelectableGrid from './components/SelectableGrid/SelectableGrid'

function App() {

  return (
    <div>
      <h1>Selectable-Grid</h1>
      <SelectableGrid rows={10} columns={15} />
    </div>
  )
}

export default App
