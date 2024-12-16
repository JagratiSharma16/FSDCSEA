// rfce
import React, { useContext } from 'react'
import { mycontext } from '../Appcontext';

function Child2context() {
  const recievecontext2 = useContext(mycontext);
  return (
    <div><br />Child2context
      <div>
        Branch: {recievecontext2.branch}
      </div>
    </div>
  )
}

export default Child2context