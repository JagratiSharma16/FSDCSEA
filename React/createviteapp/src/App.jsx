// import React from 'react';
// import Student from './Student'
// // import defaulpic from './asset'
// import Studentstate from "./Studentstate";
// import Imgmanipulation from "./Imgmanipulation";
// import "./Student.css"

// function App() {
//   return (
// <>
// {/* <div><Studentstate/></div> */}
// <div><Imgmanipulation/></div> 
// </> )
// }
// //   let a = 12
// //   const mystyle = {
// //     backgroundColor: 'red',
// //     color: 'cyan'
// //   }
// //   const st = {
// //     backgroundColor: 'lightblue',
// //     color: 'black',
// //     display: 'flex',
// //     justifyContent: 'center'
// //   }
// //   const studentdata = [
// //     {
// //       college: "ABES Engineering College",
// //       pic: "https://media.istockphoto.com/id/1391912463/photo/photo-of-a-cat-sitting-in-the-garden-and-smelling-the-air.jpg?s=2048x2048&w=is&k=20&c=xIk4LpaQ4Fs21LvqC0ZrWyS0Hxwm3XKokQ_4JnIJubU=",
// //       name: "Jagrati",
// //       roll: "44848",
// //       branch: "CSE",
// //       section: "A",
// //     }
// //     ,

// //     {
// //       college: "ABES Engineering College",
// //       pic: "https://media.istockphoto.com/id/1391912463/photo/photo-of-a-cat-sitting-in-the-garden-and-smelling-the-air.jpg?s=2048x2048&w=is&k=20&c=xIk4LpaQ4Fs21LvqC0ZrWyS0Hxwm3XKokQ_4JnIJubU=",
// //       name: "ishanvi",
// //       roll: "44848",
// //       branch: "CSE",
// //       section: "A",
// //     }
// //   ]


// //   return (
// //     <div style={mystyle}>ABES Engineering College
// //       <div style={mystyle}>{a}</div>
// //       <div style={st}>
// //         <Student data={studentdata[0]} />
// //         {/* <Student college="ABES Engineering College"
// //           pic={<img src={logo} height={100} width={100} />}
// //           name="Jagrati" roll="2022B0101162" branch="CSE" section="A" />

// //         <Student college="ABES Engineering College"
// //           pic={<img src={logo} height={100} width={100} />}
// //           name="Jagrati" roll="2022B0101162" branch="CSE" section="A" />

// //         <Student college="ABES Engineering College"
// //           pic={<img src={logo} height={100} width={100} />}
// //           name="Jagrati" roll="2022B0101162" branch="CSE" section="A" /> */}
// //       </div>
// //     </div>
// //   )
// // }

// export default App/




// import React from "react";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import MainLayout from "./MainLayout";
// import StudentState from "./StudentState";
// import ImageManipulation from "./ImageManipulation";

function App() {
  // const[regData,setRegData] = useState();

  return (
    // <div style={{display:"flex"}}> 
      // {/* <ImageManipulation/> */}
    
    // <div style={{display:"flex", flexDirection:"column", marginLeft:"40px", gap:"40px"}}>
    //   <div>{JSON.stringify(regData)}</div>
    //   <Login loginData={regData}/>
    //   <h3>Registration Form</h3>
    //   <Registration registrationData={setRegData}/>
    // </div>

    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;