import React, { Component } from "react"; 
import arrowImg from './../../images/expand-arrow.svg'
import badgeImg from './../../images/badge.svg'
import designTag from './../../images/design-tag.svg'
import Axios from 'axios'
import Cookies from 'js-cookie'
import './Badges.css'

function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      var result = (a[property].toLowerCase() < b[property].toLowerCase()) ? -1 : (a[property].toLowerCase() > b[property].toLowerCase()) ? 1 : 0;
      return result * sortOrder;
  }
}

class OrgBadges extends Component {
  state={
    data:[]
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
      myacc=true
    }
    console.log(username)
    this.setState({ loading: true }, () => {
      Axios.get('http://localhost:3001/users/github/getUserOrgs',{params:{"token":Cookies.getJSON('token'),username:username,githubLogin:myacc}})
        .then(result => {
          console.log(result)
          var data=result.data;
          data.sort(dynamicSort("login"));
          this.setState({
          loading: false,
          data: result.data,
          })
        })
        .catch(err=>{console.log(err)})
    });
  }
  render() {
    var orgs=this.state.data;
    return (
     <div>
         {
           orgs.map((org,i)=>{
            return (<div class="c6" key={i}>
            <hr/>
              <p class="organization">Organization</p>
              <a href={`/org?username=${org.login}`}><h1 class="heading1">{org.login}<img src={arrowImg} alt="expand"/></h1></a>
              <div class="badges">
                <div class="badge-card">
                  <img src={badgeImg} alt="badge" class="badge-img"/>
                  <p class="badge-period">Oct 2019</p>
                  <h1 class="badge-contri">50+ Contributions</h1>
                  <img src={designTag} alt="tag" class="badge-tech"/>
                </div>
                <div class="badge-card">
                  <img src={badgeImg} alt="badge" class="badge-img"/>
                  <p class="badge-period">Oct 2019</p>
                  <h1 class="badge-contri">50+ Contributions</h1>
                  <img src={designTag} alt="tag" class="badge-tech"/>
                </div>
                <div class="badge-card">
                  <img src={badgeImg} alt="badge" class="badge-img"/>
                  <p class="badge-period">Oct 2019</p>
                  <h1 class="badge-contri">50+ Contributions</h1>
                  <img src={designTag} alt="tag" class="badge-tech"/>
                </div>
                <div class="badge-card">
                  <img src={badgeImg} alt="badge" class="badge-img"/>
                  <p class="badge-period">Oct 2019</p>
                  <h1 class="badge-contri">50+ Contributions</h1>
                  <img src={designTag} alt="tag" class="badge-tech"/>
                </div>
                <div class="badge-card">
                  <img src={badgeImg} alt="badge" class="badge-img"/>
                  <p class="badge-period">Oct 2019</p>
                  <h1 class="badge-contri">50+ Contributions</h1>
                  <img src={designTag} alt="tag" class="badge-tech"/>
                </div>
                <div class="badge-card">
                  <img src={badgeImg} alt="badge" class="badge-img"/>
                  <p class="badge-period">Oct 2019</p>
                  <h1 class="badge-contri">50+ Contributions</h1>
                  <img src={designTag} alt="tag" class="badge-tech"/>
                </div>
              </div>
            </div>)
           })
          }
      </div>
    );
  }
}

export default OrgBadges;