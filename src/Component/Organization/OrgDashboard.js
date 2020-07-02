/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react"; 
import Axios from 'axios'
import './../Users/Dashboard.css'
import Cookies from 'js-cookie'
import dashboardImg from './../../images/dashboard.svg'
import twitterImg from './../../images/twitter-btn.svg'
import githubImg from './../../images/github-btn.svg'
import linkImg from './../../images/link-url.svg'
import Members from './Members'
import Badges from './../Users/Badges'
import Requests from './Requests'

class OrgDashboard extends Component {
  state={
    data:[],
    display:this.props.match.params.display
  }
  queryStringParse(string) {
    let parsed = {}
    if(string !== '') {
        string = string.substring(string.indexOf('?')+1)
        let p1 = string.split('&')
        p1.map(function(value) {
            let params = value.split('=')
            parsed[params[0]] = params[1]
        });
    }
    return parsed
  }
  componentDidMount(){
    var params=this.queryStringParse(window.location.href)
    var username = params.username
    var myacc=false
    if(username===undefined){
      username=Cookies.getJSON('username')
    }
    console.log(username)
    this.setState({ loading: true }, () => {
      Axios.get('http://localhost:3001/users/github/getUserData',{params:{"token":Cookies.getJSON('token'),username:username,githubLogin:myacc}})
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
    const { data, display } = this.state;
    var username=data.login
    var avatar_utl=data.avatar_url
    var name=data.name
    var description = data.bio
    var twitterUrl = `https://twitter.com/${data.twitter_username}`;
    console.log(display)
    return (
      <>
      <div class="child2">
        <div class="child3">
          <div class="child4">
            <div class="c41">
              <div>
                <img src={avatar_utl} alt="profile" class="profile-pic"/>
                <h1 class="heading">{name} <label class="tag">Organization</label></h1>
                <p class="username">@{username}</p>
                <p class="status">{description}</p>
                <a name="" id="" class="profileurl" href={twitterUrl} role="button"><img src={twitterImg} alt="twitter url"/></a>
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
                {
                  display==="badges"?
                  <>
                  <a class="nav-link btn active" href={`/org/badges?username=${username}`} onClick={()=>this.setState({'display':"badges"})}>Badges</a>
                  </>
                  :
                  <a class="nav-link btn inactive" href={`/org/badges?username=${username}`} onClick={()=>this.setState({'display':"badges"})}>Badges</a>
                }
                {
                  display==="members"?
                  <>
                  <a class="nav-link btn active" href={`/org/members?username=${username}`} onClick={()=>this.setState({'display':"members"})}>Members</a>
                  </>
                  :
                  <a class="nav-link btn inactive" href={`/org/members?username=${username}`} onClick={()=>this.setState({'display':"members"})}>Members</a>
                }
                {
                  username===Cookies.getJSON("username")?
                  <>
                  {
                    display==="requests"?
                    <>
                    <a class="nav-link btn active" href={`/org/requests?username=${username}`} onClick={()=>this.setState({'display':"requests"})}>Request</a>
                    </>
                    :
                    <a class="nav-link btn inactive" href={`/org/requests?username=${username}`} onClick={()=>this.setState({'display':"requests"})}>Request</a>
                  }
                </>
                :
                <></>
                }
              </div>
          </div>
          <hr/>
          <div class="child6">
            {display==="members" ? <Members/>:display==="badges"?<Badges/>:<Requests/> }
          </div>
          </div>
        </div>
      </>
    );
}
}

export default OrgDashboard;