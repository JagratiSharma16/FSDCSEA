import React from 'react'
import Child3 from './child3'

function Child2({child2data}) {
  return (
    <div>child2
        Name: {child2data.name}
        <Child3 child3data={child2data}/>
    </div>
  )
}

export default Child2