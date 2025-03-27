import { useState } from 'react'

import './App.css'
import Register from './component/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Register />
    </div>
  )
}

export default App
