import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componants/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "krishna",
    age : 21
  }
  return (
    <>
    <h1 className='bg-purple-900 text-white p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="krishna" btnTxt="Click me"/>
    <Card username="Meera" />

    </>
  )
}

export default App
