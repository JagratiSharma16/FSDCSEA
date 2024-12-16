//rfce
import React, { useContext } from 'react'
import { mycontext } from '../Appcontext'

function Child1context() {
  const recievecontext1 = useContext(mycontext);
  return (
    <div><br />Child1context 
      <div>
        Name: {recievecontext1.name}
      </div>
    </div>
  )
}

export default Child1context