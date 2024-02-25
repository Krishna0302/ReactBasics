import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  const addValue = ()=>{
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }
// let counter = 15
  return (
    <><h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>

    <button onClick={removeValue}>Remove value</button>

    </>
  )
}

export default App
