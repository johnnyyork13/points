import {useState, useEffect} from 'react'
import './App.css'
import Home from './components/Home';
import MainRoutes from './components/Routes';

function App() {
  
  // const url = 'https://us-central1-points-firebase-function.cloudfunctions.net/api'
  const url = 'http://localhost:3004'

  return (
    <div className="App">
      <MainRoutes url={url}/>
    </div>
  )
}

export default App
