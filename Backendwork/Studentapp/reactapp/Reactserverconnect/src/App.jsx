import { useState } from 'react'

import './App.css'
import Register from './component/Register'
import Login from './component/Login'


function App() {


  return (
    <div>
      <div>
        <Login/>
      </div>
      <Register />
    </div>
  )
}

export default App
