import React, { Component } from "react"; 
import './Requests.css'
import requestImg from './../../images/member-img.svg'
import adminTag from './../../images/admin-tag.svg'
import Cookies from 'js-cookie'
import arrowUp from './../../images/up-arrow.svg'
import arrowDown from './../../images/down-arrow.svg'

class Requests  extends Component {
    constructor(props){
    super(props);
        this.state={
        allrequests:[{
            username:"Ted WIlson",
            role:"Frontend End Developer",
            teamName:"Design",
            title:"Badge for contribution in Donut",
            description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia",
            shortDesc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia",
            points:10,
            links:[
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm",
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm",
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm",
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm"
            ],
            extraPnts:0,
            viewFull:true
        },
        {
            username:"Ted WIlson",
            role:"Frontend End Developer",
            teamName:"Design",
            title:"Badge for contribution in Donut",
            description:`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
            links:[
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm",
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm",
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm",
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm"
            ],
            shortDesc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia",
            points:10,
            extraPnts:0,
            viewFull:false
        },
        {
            username:"Ted WIlson",
            role:"Frontend End Developer",
            teamName:"Design",
            title:"Badge for contribution in Donut",
            description:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia",
            shortDesc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia.",
            points:10,
            links:[
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm",
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm",
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm",
                "https://www.figma.com/file/rvyLIe0MxcB7vAl2ut24VY/CodeUino-CodeBadge?node-id=3DSjjmacskm"
            ],
            extraPnts:0,
            viewFull:false
        }
    ]
    }
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

    onAddPoints(i){
        this.setState(state=>{
            const requests = state.allrequests.map((request,j)=>{
                if(j===i){
                    if(request.extraPnts<=5){
                        request.points++;
                    }
                }
                return request;
            })
            return {allrequests:requests}
        })
    }
    
    onSubPoints(i){
        this.setState(state=>{
            const requests = state.allrequests.map((request,j)=>{
                if(j===i){
                    request.points--;
                }
                return request;
            })
            return {allrequests:requests}
        })
    }

    viewChange(i){
        this.setState(state=>{
            const requests = state.allrequests.map((request,j)=>{
                if(j===i){
                    request.viewFull=!request.viewFull;
                }
                return request;
            })
            return {allrequests:requests}
        })
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
        // axios.get('http://localhost:3001/orgs/github/getOrgrequests',{params:{"token":Cookies.getJSON('token'),username:username,githubLogin:myacc}})
        //     .then(requests=>{
        //         this.setState({loading: false,requests:requests})
        //     })
        //     .catch(err=>console.log(err))
    }
    render() {
        var {allrequests,loading} = this.state
      return (
          <div>
              {loading ? <h1>Loading</h1> : 
              <div class="c6a">
              {
                  allrequests.map((requests,i)=>{
                  return (
                          <div class="request-cards" key={i}>
                              <div class="request-header">
                                  <div class="request-left">
                                      <img src={requestImg} alt="request" class="request-img"/>
                                      <a href={`/user?username=${requests.username}`}><div class="details">
                                          <h1 class="request-name">{requests.username}<img src={adminTag} alt="requestship"/></h1>
                                          <p class="request-text">{requests.role}</p>
                                      </div>
                                      </a>
                                  </div>
                                  <div class="request-right">
                                      <div class="pointsdiv"><h4 class="points">{requests.points}</h4></div>
                                      <div class="change">
                                          <img src={arrowUp} alt="arrow-up" onClick={(e)=>{e.preventDefault();this.onAddPoints(i)}}/>
                                          <img src={arrowDown} alt="arrow-down" onClick={(e)=>{e.preventDefault();this.onSubPoints(i)}}/>
                                      </div>
                                      <button class="btn btn-primary addPnts">Give points</button>
                                  </div>
                              </div>
                                {
                                    requests.viewFull?
                                        <div class="request-body">
                                            <h1 class="request-title">{requests.title}</h1>
                                            <p class="request-description">{requests.description}</p>
                                            <h1 class="request-links">Links</h1>
                                            {
                                                requests.links.map((link,i)=>{
                                                    return (
                                                        <>
                                                            <a href={link}>{link}</a><br/>
                                                        </>
                                                    )
                                                })
                                            }
                                            <a href="#" onClick={()=>{this.viewChange(i)}}>View Less</a>
                                        </div>
                                        :
                                        <div class="request-body">
                                            <h1 class="request-title">{requests.title}</h1>
                                            <p class="request-short">{requests.shortDesc}</p>
                                            <a href="#" onClick={()=>{this.viewChange(i)}}>View More</a>
                                        </div>
                                }
                          </div>
                      )   
                  })      
                }
          </div>
              }            
          </div>
      );
    }
}

export default Requests;