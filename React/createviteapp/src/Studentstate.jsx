import React, { useState } from 'react';

function Studentstate() {
  const [count, setCount] = useState(100);
  function Increment(){
    setCount(count + 1)
  }
  function Decrement(){
    setCount(count - 1)
  }
  return (
    <div>
      {count}
      <button
        onClick={() => { setCount(count + 1) }}>
        Increment
      </button>
      
      <button
        onClick={Increment}>
        Increment
      </button>

      <button
        onClick={Decrement}>
        Decrement
      </button>
    </div>
  )
}

export default Studentstate