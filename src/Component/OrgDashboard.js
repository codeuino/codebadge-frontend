import React, { Component } from "react"; 
import Axios from 'axios'
import './Dashboard.css'
import Cookies from 'js-cookie'
import dashboardImg from './../images/dashboard.svg'
import twitterImg from './../images/twitter-btn.svg'
import githubImg from './../images/github-btn.svg'
import linkImg from './../images/link-url.svg'
import Members from './Members'

class OrgDashboard extends Component {
  state={
    data:[]
  }
  componentDidMount(){
    this.setState({ loading: true }, () => {
      Axios.get('http://localhost:3001/github/getUserData',{params:{"token":Cookies.getJSON('token'),username:Cookies.getJSON('username'),githubLogin:Cookies.getJSON('githubLogin')}})
        .then(result => {
          console.log(result)
          this.setState({
          loading: false,
          data: result.data,
          })
        })
        .catch(err=>{console.log(err)})
    });
  }

  render() {
    const { data, loading } = this.state;
    var username=data.login
    var avatar_utl=data.avatar_url
    var name=data.name
    
    return (
      <>
      <div class="child2">
        <div class="child3">
          <div class="child4">
            <div class="c41">
              <div>
                <img src={avatar_utl} alt="profile" class="profile-pic"/>
                <h1 class="heading">{name}</h1>
                <p class="username">@{username}</p>
                <p class="status">Codeuino team member. I'm interested in tools and processes for collaborating with money.</p>
                <a name="" id="" class="profileurl" href="#" role="button"><img src={twitterImg} alt="twitter url"/></a>
                <a name="" id="" class="profileurl" href={data.html_url} role="button"><img src={githubImg} alt="github url"/></a>
                <a name="" id="" class="profileurl" href="#" role="button"><img src={linkImg} alt="link url"/></a>
              </div>  
            </div>
            <div class="c42">
              <img src={dashboardImg} alt="profile" class="img-responsive"/>
            </div>
          </div>
          <div class="child5">
              <div class="tabs">
                  <a class="nav-link btn" href="#">Badges</a>
                  <a class="nav-link btn" href="#">Members</a>
                  <a class="nav-link btn" href="#">Request</a>
              </div>
          </div>
          <hr/>
          <div class="child6">
              
            <Members/>
          </div>
          </div>
        </div>
      </>
    );
}
}

export default OrgDashboard;