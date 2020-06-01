import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Header from './Component/Header'
import About from './Component/About'
import Home from './Component/Home'
import Register from './Component/Register'
import Dashboard from './Component/Dashboard'
import Login from './Component/Login'
import Footer from './Component/Footer'
import { Button,Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cookies from 'js-cookie';

import logoNameImg from './images/logo_name.svg'

var clientID;
var frontend = window.location.origin;
console.log(frontend);

if(process.env.NODE_ENV==="production"){
  // clientID="9a3d93461f11673e4164"
  clientID=process.env.clientID_Production
}
else{
  clientID=process.env.clientID_Development
}
function login(){
    window.location.href=`https://github.com/login/oauth/authorize?client_id=${clientID}`;
}

function logout(){
    Cookies.remove('token');
    window.location.href=frontend;
}

function App() {
  if(!Cookies.get('token')){
    return (
      <div class="parent">
        <Router>
        <div class="child1">
            
            <div class="logo"><Link to="/"><img src={logoNameImg} alt="logo"/></Link></div>
            <div></div>
            <div></div>
            <div class="tabs">
                <nav class="navbar navbar-light navbar-expand-md bg-white">
                  
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                      <span class="navbar-toggler-icon"bg="white"></span>
                    </button>
                  
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link btn" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link btn" to="/">Join Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link btn" to="/login">Login</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
            </div>
        </div>
        {/* <div class="child2"> */}
        <Switch>
          <Route path="/register">
              <Register/> 
          </Route>
          <Route path="/about">
            <About/> 
          </Route>
          <Route path="/login">
              <Login/>  
            </Route>
          <Route path="/">
            <Home/>  
          </Route>
        </Switch>
        {/* </div> */}
        </Router>
      </div>
    );
  }
  else{
    return (
      <div class="parent">
        <Router>
        <div class="child1">
            
            <div class="logo"><Link to="/"><img src={logoNameImg} alt="logo"/></Link></div>
            <div></div>
            <div></div>
            <div class="tabs">
                <nav class="navbar navbar-light navbar-expand-md bg-white">
                  
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                      <span class="navbar-toggler-icon"bg="white"></span>
                    </button>
                  
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link btn" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link btn" to="/">Join Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link btn btn-primary font-white" to="/login" onClick={logout}>Logout</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
            </div>
        </div>
        <div class="child2">
          <Switch>
          <Route path="/user">
                <Dashboard/> 
            </Route>
            <Route path="/organization">
                <Register/> 
            </Route>
            <Route path="/contest">
                <Register/> 
            </Route>
            <Route path="/">
              <Home/>  
            </Route>
          </Switch>
        </div>
        </Router>
        <Footer/>
      </div>
    )
}
}

export default App;
