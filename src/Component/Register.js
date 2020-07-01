import React, { Component } from "react"; 
import logoImg from './../images/logo.svg'
import jsImg from './../images/js.svg'
import './Login.css'
class Register extends Component {
  render() {
    return (
      <div className="child2">
      <div className="c1"><img src={jsImg} alt="JS design" className="image"/></div>
      <div className="c2">
            <img src={logoImg} alt="logo" className="logo1"/>
            <div className="header">
               <h1 className="heading">Sign Up</h1>
               <div className="label1 newhere">Already Here?<a href="/login">Login</a></div>
            </div>
            <form method="POST" action="http://localhost:3001/users/codebadge/signup">
            <p className="label">Full Name</p>
            <input type="text" placeholder="enter your useremail here" name="fullname" className="input"/>
            <p className="label">Email</p>
            <input type="text" placeholder="enter your useremail here" name="username" className="input"/>
            <p className="label">Password</p>
            <input type="password" placeholder="enter your password here" name="password" className="input"/><br/>
            <div className="remember-me">
              <div>
                <input type="checkbox" className="remember" name="remember" defaultChecked/><label className="label1">Remember me</label>
              </div>
            </div>
            <div className="button-group1">
              <button type="submit" className="btn btn-primary btn1 btn-responsive">Login</button>
              <button type="button" className="btn btn-dark btn2 btn-responsive"><i className="fa fa-github" aria-hidden="true"></i></button>
              <button type="button" className="btn btn-danger btn2 btn-responsive"><i className="fa fa-envelope" aria-hidden="true"></i></button>
            </div>
            </form>
    </div>
   </div>
    );
  }
}

export default Register;