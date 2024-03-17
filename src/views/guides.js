import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './guides.css'

const Guides = (props) => {
  return (
    <div className="guides-container">
      <Helmet>
        <title>Guides - prowler</title>
        <meta property="og:title" content="Guides - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="guides-container1">
        <Link to="/character-guide" className="guides-navlink">
          <div className="guides-container2">
            <svg viewBox="0 0 950.8571428571428 1024" className="guides-icon">
              <path d="M950.857 347.429v402.286c0 70.286-57.714 128-128 128h-694.857c-70.286 0-128-57.714-128-128v-548.571c0-70.286 57.714-128 128-128h182.857c70.286 0 128 57.714 128 128v18.286h384c70.286 0 128 57.714 128 128z"></path>
            </svg>
            <h1 className="guides-text">
              <span>Character</span>
              <br></br>
              <span>Guidelines</span>
              <br></br>
            </h1>
          </div>
        </Link>
        <div className="guides-container3">
          <svg viewBox="0 0 731.4285714285713 1024" className="guides-icon2">
            <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
          </svg>
          <h1 className="guides-text05">
            <span>Roleplay</span>
            <br></br>
            <span>Manuals</span>
            <br></br>
          </h1>
        </div>
        <Link to="/template" className="guides-navlink1">
          <div className="guides-container4">
            <svg viewBox="0 0 877.7142857142857 1024" className="guides-icon4">
              <path d="M838.857 272c5.714 5.714 10.857 12.571 16 20.571h-269.714v-269.714c8 5.143 14.857 10.286 20.571 16zM566.857 365.714h310.857v603.429c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h457.143v310.857c0 30.286 24.571 54.857 54.857 54.857zM658.286 786.286v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 640v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286zM658.286 493.714v-36.571c0-10.286-8-18.286-18.286-18.286h-402.286c-10.286 0-18.286 8-18.286 18.286v36.571c0 10.286 8 18.286 18.286 18.286h402.286c10.286 0 18.286-8 18.286-18.286z"></path>
            </svg>
            <h1 className="guides-text10">
              <span>Character</span>
              <br></br>
              <span>Template</span>
              <br></br>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Guides
