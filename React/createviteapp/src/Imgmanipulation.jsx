import React, { useState } from 'react'
import cat from './assets/catimg.webp'

function Imgmanipulation() {
    const [height , setHeight]=useState(150);
    const [width , setWidth]=useState(150);
    const [red , setRed]=useState(0);
    const [green , setGreen]=useState(0);
    const [blue , setBlue]=useState(0);
    function enhanceheight(){
        setHeight(height + 30)
    }
    function enhancewidth(){
        setWidth(width + 30)
    }
    function changecolor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    function decreasewidth(){
        setWidth(width - 30)
    }
    function decreaseheight(){
        setHeight(height - 30)
    }
  return (
    
    <div>Imgmanipulation
        <div style={{border:'2px solid black', height:'400px' , width: '400px' ,backgroundColor: `RGB(${red},${green},${blue})`}}>
            <img src={cat} height={height} width={width}/>
        </div>
        <div className='btns'>
            <button onClick={enhanceheight}>Enhance Height</button>
            <button onClick={enhancewidth}>Enhance width</button>
            <button onClick={decreaseheight}>Decrease height</button>
            <button onClick={decreasewidth}>Decrease width</button>
            <button onClick={changecolor}>Change Color</button>
            
        </div>
    </div>

  )
}

export default Imgmanipulation