import React from 'react';
import logoImg from './../images/logo.svg'
import jsImg from './../images/js.svg'
import './Home.css'
import Cookies from 'js-cookie'
import {get} from "axios"
var clientID;
var frontend = window.location.origin;
console.log(frontend);

if(process.env.NODE_ENV==="production"){
    clientID="9a3d93461f11673e4164"
  }
  else{
    clientID="90483cf9b8d2f46424fa"
  }
function login(){
    window.location.href=`https://github.com/login/oauth/authorize?client_id=${clientID}`;
    // get(`https://github.com/login/oauth/authorize?client_id=${clientID}`,{headers:{"Access-Control-Allow-Origin":"*"}})
    //     .then(resp=>console.log(resp))
    //     .catch(err=>console.log(err))
    Cookies.set('githubLogin',true)
}

const Home = () => {
    return (
        <div class="child2">
          <div class="c1"><img src={jsImg} alt="Kiwi standing on oval" class="image"/></div>
          <div class="c2">
                <img src={logoImg} alt="logo" class="logo1"/>
                <h1 class="heading">Welcome to CodeBadge.</h1>
                <p class="p1">Track all your Projects at one place</p>
                <p class="p2">Many a times it may happen that a mentor is unable to manage all these activities. So This project is about tracking the contributor as well as its contribution by respective mentors.</p>
                <div class="button-group">
                    <button class="btn btn-dark btn-responsive resp1" onClick={login}><i class="fa fa-github"></i>Signup with Github</button>
                    <button class="btn btn-danger btn-responsive resp1"><i class="fa fa-envelope"></i>Signup with Gmail</button>
                </div>
                <a href="/register" class="p3">or Signup with email</a>
            <div></div>
        </div>  
        </div>
    );
}

export default Home;
