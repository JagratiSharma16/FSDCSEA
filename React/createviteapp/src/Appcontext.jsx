//rfce
import React, { createContext } from 'react'
import Child1context from './contextcomponent/Child1context';
import Child3context from './contextcomponent/Child3context';
import Child2context from './contextcomponent/Child2context';

const mycontext = createContext();
function Appcontext() {
    const data ={
        name : "jagrati",
        branch:"cse",
        section:"A"
    }
  return (
    <div>Appcontext
        <mycontext.Provider value={data}>
            <Child1context />
            <Child2context />
            <Child3context />
        </mycontext.Provider>
    </div>
  )
}
export {
    mycontext
}
export default Appcontext