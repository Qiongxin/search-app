import { useState } from 'react';
import './App.css';
import Lists from './components/Lists';
import Search from './components/Search';

function App() {

  const [data, setData] = useState([])
  const [first, setFirst] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const updateData = (userData) => {
    setData(userData)
    console.log(userData)
  }

  const updateFirst = () => {
    setFirst(false)
  }

  const updateLoading = (state) => {
    setLoading(state)
  }

  const updateError = (error) => {
    setError(error)
  }

  return (
    <div className="App">
      <Search updateData={updateData} 
              updateFirst={updateFirst} 
              updateLoading={updateLoading} 
              updateError={updateError}/>
      <Lists data={data} first={first} loading={loading} error={error}/>
    </div>
  );
}

export default App;
