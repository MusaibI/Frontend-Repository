import { useEffect, useState } from 'react';
import './App.css';
import connectDB, { addData, getAll } from './dbConfig/db';

function App() {
  const [data, setData] = useState('');
  const [users, setUsers] = useState([]);

  const getAllUsers = async () =>{
    const result = await getAll('Users');
    setUsers(result)
  }
  // Connect to the DB and create the 'Users' object store on first run
  useEffect(() => {
    connectDB('Users');
  }, []);

  return (
    <div className="App">
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter some data"
      />
      <button onClick={() => addData('Users', data)}>Add Data</button>

      <button onClick={getAllUsers}>Get All Users</button>
      {users.map(u =>(
        <p key={u.id}>{u.value}</p>
      ))}
    </div>
  );
}

export default App;
