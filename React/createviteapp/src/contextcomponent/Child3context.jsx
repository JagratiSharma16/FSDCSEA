//rfce
import React, { useContext } from 'react'
import { mycontext } from '../Appcontext'

function Child3context() {
  const recievecontext3 = useContext(mycontext);
  return (
    <div><br />Child3context 
      <div>
        
        section : {recievecontext3.section}
      </div>
    </div>
  )
}

export default Child3context