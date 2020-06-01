import React, { Component } from "react"; 
import arrowImg from './../images/expand-arrow.svg'
import badgeImg from './../images/badge.svg'
import designTag from './../images/design-tag.svg'

import './Badges.css'
class Badges extends Component {
  render() {
    return (
     <div>
       <div class="c6">
            <hr/>
              <p class="organization">Organization</p>
              <h1 class="heading1">Codeuino <img src={arrowImg} alt="expand"/></h1>
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
            </div>
            <div class="c6">
              <hr/>
              <p class="organization">Organization</p>
              <h1 class="heading1">Codeuino <img src={arrowImg} alt="expand"/></h1>
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
            </div>
      </div>
    );
  }
}

export default Badges;