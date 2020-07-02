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

class Badges extends Component {
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
          result.data.forEach(element => {
            element.viewfull=true;
          });data.sort(dynamicSort("login"));
          
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
              <div class="badges-head">
                <div class="org-name">
                  <a href={`/org/members?username=${org.login}`}><h1 class="heading1">{org.login}</h1></a>
                  {
                    org.viewFull?
                    <i class="fa fa-chevron-down expand"></i>
                    :
                    <i class="fa fa-chevron-down expand"></i>
                  }
                </div>
                <button class="btn btn-primary" data-toggle="modal" data-target="#request-modal">Request Points</button>
              
                {/* Modal */}
                <div id="request-modal" class="modal fade" role="dialog">
                  <div class="modal-dialog modal-xl">

                    {/* Modal content */}
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Request for Points</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div class="modal-body">
                        <p class="organization">Organization</p>
                        <a href={`/org/members?username=${orgs[i].login}`}><h1 class="heading1">{orgs[i].login}<img src={arrowImg} alt="expand"/></h1></a>
                        <p class="label">Team</p>
                        <select class="modal-input">
                          <option value="design">Design</option>
                          <option value="docs">Docs</option>
                          <option value="media">Social Media</option>
                          <option value="marketing">Marketing</option>
                          <option value="development">Development</option>
                        </select>
                        <p class="label">Select Work</p>
                        <select class="modal-input">
                          <option value="donut">Donut</option>
                          <option value="codebadge">Codebadge</option>
                          <option value="initiative">Design Initiative</option>
                          <option value="website">website</option>
                        </select>
                        <p class="label">Description</p>
                        <textarea class="input-desc" placeholder="Why do you want go for the Editor Job Profile? (100 words)"/>
                        <div class="work">
                        <div class="links">
                          <h1>Links</h1>
                          <input class="modal-input modal-link" type="text"/>
                          <button class="btn btn-primary link">Add link</button>
                        </div>
                        <div class="files">
                          <h1>Files</h1>
                            <label class="file">
                              <input type="file" id="file" aria-label="File browser example"/>
                              <span class="file-custom"></span>
                            </label>
                        </div>
                      </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {
                org.viewFull?
                <></>
                :
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
              
            }
            </div>)
           })
          }
      </div>
    );
  }
}

export default Badges;