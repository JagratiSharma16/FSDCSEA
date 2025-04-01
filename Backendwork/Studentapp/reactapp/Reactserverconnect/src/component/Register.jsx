import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
 function Register() {
    async function sendData(e){
        e.preventDefault();
        const name = e.target.name.value
        const email=e.target.email.value;
        const password=e.target.password.value;
         alert(name+email+password)
        const response=await fetch("http://localhost:9392/register",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{'Content-Type':'application/json'}
        })
        const res = await response.json();
        alert(res.msg)
      }
    return (
        <div>Registration
            <form onSubmit={sendData}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" name='name' required class="form-control"  aria-describedby="emailHelp" placeholder="Enter Name"/>
            </div>

            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name='email' required class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name='password' required class="form-control"  placeholder="Password"/>
            </div>
    
            <button type="submit" class="btn btn-primary">Submit</button>
        </form></div>
    )
}

export default Register