import React, { Component } from "react"; 
import logoImg from './../images/logo.svg'
import jsImg from './../images/js.svg'
import './Login.css'
class Register extends Component {
  render() {
    return (
      <div class="child2">
      <div class="c1"><img src={jsImg} alt="JS design" class="image"/></div>
      <div class="c2">
            <img src={logoImg} alt="logo" class="logo1"/>
            <div class="header">
               <h1 class="heading">Sign Up</h1>
               <div class="label1 newhere">Already Here?<a href="/login">Login</a></div>
            </div>
            <form method="POST" action="http://localhost:3001/users/signup">
            <p class="label">Full Name</p>
            <input type="text" placeholder="enter your useremail here" name="fullname" class="input"/>
            <p class="label">Email</p>
            <input type="text" placeholder="enter your useremail here" name="username" class="input"/>
            <p class="label">Password</p>
            <input type="password" placeholder="enter your password here" name="password" class="input"/><br/>
            <div className="remember-me">
              <div>
                <input type="checkbox" class="remember" name="remember" defaultChecked/><label class="label1">Remember me</label>
              </div>
            </div>
            <div class="button-group1">
              <button type="submit" class="btn btn-primary btn1 btn-responsive">Login</button>
              <button type="button" class="btn btn-dark btn2 btn-responsive"><i class="fa fa-github" aria-hidden="true"></i></button>
              <button type="button" class="btn btn-danger btn2 btn-responsive"><i class="fa fa-envelope" aria-hidden="true"></i></button>
            </div>
            </form>
    </div>
   </div>
    );
  }
}

export default Register;