import React from 'react'
import child1 from './component/child1'

function AppProps() {
    const data={
        name: "Rahul",
        branch:"CSE",
        section:"A"
    }
  return (
    <div>AppProps
        <div>
            <child1/>
        </div>
    </div>

  )
}

export default AppProps