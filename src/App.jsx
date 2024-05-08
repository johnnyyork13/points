import {useState, useEffect} from 'react'
import './App.css'
import Home from './components/Home';

function App() {
  
  // const url = 'https://us-central1-points-firebase-function.cloudfunctions.net/api'
  const url = 'http://localhost:3004'

  const [test, setTest] = useState('');

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setTest(data.message)
    })
  }, [])

  console.log(test);

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
