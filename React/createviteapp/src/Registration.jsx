// import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Registration({registrationData}) {

    const[myName,setName] = useState();
    const[myEmail,setEmail] = useState();
    const[myPass,setPass] = useState();
    // const[data,setData] = useState();

    function doRegistration(e) {
        // alert("Name : "+myName+"\nEmail : "+myEmail+"\nPassword : "+myPass);
        e.preventDefault();
        const objectData = {
            myName,
            myEmail,
            myPass
        }
        registrationData(objectData);
        // setData(objectData);
    }

  return (
    <div style={{margin:"40px"}}>
        {/* <div>{myName}</div> */}
        {/* {JSON.stringify(data)} */}
        <h3>Registration Form</h3>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputName" aria-describedby="Name" placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted"> We will never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={(e)=>setPass(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1"> Check me out </label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={doRegistration}>Register</button>
      </form>
    </div>
  )
}
Registration.propTypes = {
  registrationData: PropTypes.func.isRequired,
};

export default Registration;