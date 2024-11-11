import React from 'react'
import Student from './Student'

function App() {
  let a=12
  const mystyle={
    backgroundColor:'red',
    color:'cyan'
  }
  const st={
    backgroundColor:'lightblue',
    color:'black'
  }
  return (
    <div style={mystyle}>ABES Engineering College
    <div style={mystyle}>{a}</div>
    <div style={st}>
      <Student college="ABES Engineering College" name="Jagrati" roll="2022B0101162" branch="CSE" section="A" />
    </div>
    </div>
  )
}

export default App