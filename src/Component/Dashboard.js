import React, { Component } from "react"; 
import Axios from 'axios'
import './Dashboard.css'
import Cookies from 'js-cookie'
import Member from './Badges'
import Badges from './Badges'
import dashboardImg from './../images/dashboard.svg'
import twitterImg from './../images/twitter-btn.svg'
import githubImg from './../images/github-btn.svg'
import linkImg from './../images/link-url.svg'
import qs from "stringquery";

// import badgesImg from './../images/badges.svg'

class Dashboard extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  state={
    data:[]
  }
  queryStringParse(string) {
    let parsed = {}
    if(string != '') {
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
    // const { match: { params } } = this.props;
    // console.log(this.props.location.search)
    var params=this.queryStringParse(window.location.href)
    var username = params.username
    var myacc=false
    if(username==undefined){
      username=Cookies.getJSON('username')
      myacc=true
    }
    console.log(username)
    this.setState({ loading: true }, () => {
      Axios.get('http://localhost:3001/github/getUserData',{params:{"token":Cookies.getJSON('token'),username:username,githubLogin:myacc}})
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
          <div class="child6">
            <Badges/>
          </div>
          </div>
        </div>
      </>
    );
}
}

export default Dashboard;