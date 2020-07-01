import React, { Component } from "react"; 
import './Members.css'
import memberImg from './../../images/member.svg'
import adminTag from './../../images/admin-tag.svg'
import moderatorTag from './../../images/moderator.svg'
import axios from 'axios'
import Cookies from 'js-cookie'

const Member = (props) => {
    var allmembers=[]
    allmembers=props.members.data
    console.log("members",allmembers)
    if(allmembers!==undefined && allmembers.length>0){
    return (
        <div class="c6a">
            {
                allmembers.map((member,i)=>{
                 return (
                    <div class="member-cards" key={i}>
                            <div class="member-left">
                                <img src={member.avatar_url} alt="member" class="member-img"/>
                                <a href={`/user?username=${member.login}`}><div class="details">
                                    <h1 class="member-name">{member.login}<img src={adminTag} alt="membership"/></h1>
                                    <p class="member-text">Front End Developer</p>
                                </div>
                                </a>
                            </div>
                            <div class="member-right">
                                <p class="member-text">Badges</p>
                                <h1 class="member-name">29</h1>
                            </div>
                        </div>
                    )   
                })      
              }
        </div>
    );}
    else{
        return (
            <></>
        )
    }
}



class Organizations extends Component {
    state={
        members:[]
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
        var myacc=Cookies.getJSON("githubLogin")
        if(username===undefined){
        username=Cookies.getJSON('username')
        myacc=true
        }
        console.log(username)
        // axios.get('http://localhost:3001/orgs/github/getOrgMembers',{params:{"token":Cookies.getJSON('token'),username:username,githubLogin:myacc}})
        //     .then(members=>{
        //         this.setState({loading: false,members:members})
        //     })
        //     .catch(err=>console.log(err))
    }
  render() {
      var {members,loading} = this.state
      console.log(members)
    return (
        <div>
            {loading ? <h1>Loading</h1> : <Member members={members} />}            
        </div>
    );
  }
}

export default Organizations;