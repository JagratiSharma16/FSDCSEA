import React, { useState } from 'react';

function Studentstate() {
    const[count,setcount]=useState(100);
  return (
    <div>{count} </div>
  )
}

export default Studentstate