import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

function Login({loginData}) {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    function verification() {
        if (loginData.myEmail == email && loginData.myPass == password) {
            alert("Valid User");
        }
    }

  return (
    <div style={{margin:"40px"}}>
        <h3>Login Form</h3>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted"> We will never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1"> Check me out </label>
            </div>
            <button onClick={verification} type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  );
}
Login.propTypes = {
    loginData: PropTypes.func.isRequired,
};

export default Login;