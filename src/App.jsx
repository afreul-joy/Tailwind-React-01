import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
      <h1 className="text-red-300">This is head 1 </h1>
      <h2 className="text-red-700 uppercase underline ">THis is h2 </h2>
      <h3>THis is h3 </h3>
      <h4>THis is h4 </h4>
    </div>
  )
}

export default App
