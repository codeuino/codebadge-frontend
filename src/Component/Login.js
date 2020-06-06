import React, { Component } from "react"; 
import logoImg from './../images/logo.svg'
import jsImg from './../images/js.svg'
import './Login.css'
class Login extends Component {
  constructor(props){
    super(props);
  }
  state={
    username:"",
    password:""
  }
  setUsername(text){
    console.log(text)
    this.setState('username',text)
  }
  render() {
    return (
      <div class="child2">
        <div class="c1"><img src={jsImg} alt="JS design" class="image"/></div>
        <div class="c2">
              <img src={logoImg} alt="logo" class="logo1"/>
              <div class="header">
                 <h1 class="heading">Login</h1>
                 <div class="label1 newhere">New Here?<a href="/register">Sign up</a></div>
              </div>
              <form method="POST" action="http://localhost:3001/users/login">
              <p class="label">Email/Username</p>
              <input type="text" placeholder="enter your useremail here" name="username" class="input" />
              <p class="label">Password</p>
              <input type="password" placeholder="enter your password here" name="password" class="input"/><br/>
              <div className="remember-me">
                <div>
                  <input type="checkbox" class="remember" name="remember" defaultChecked/><label class="label1">Remember me</label>
                </div>
                <div><a href="/" class="label1">Forgot password</a></div>
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

export default Login;