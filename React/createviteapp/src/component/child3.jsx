import React from 'react'


function Child3({child3data}) {
  return (
    <div>child3
        Name: {child3data.name},
        Branch: {child3data.branch},
        Section:{child3data.section}
    </div>
  )
}

export default Child3