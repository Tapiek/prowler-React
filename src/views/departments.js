import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './departments.css'

const Departments = (props) => {
  return (
    <div className="departments-container">
      <Helmet>
        <title>Departments - prowler</title>
        <meta property="og:title" content="Departments - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="departments-container1">
        <div className="departments-container2">
          <Link to="/operations" className="departments-navlink">
            <img
              alt="image"
              src="https://lcars.ufstarfleet.org/images/thumb/f/f4/UFS-Operations.png/350px-UFS-Operations.png"
              className="departments-image"
            />
          </Link>
          <h1 className="departments-text">OPERATIONS</h1>
          <span className="departments-text01">
            <span>Engineering</span>
            <br></br>
            <span>Security</span>
            <br></br>
          </span>
        </div>
        <div className="departments-container3">
          <Link to="/command" className="departments-navlink1">
            <img
              alt="image"
              src="https://lcars.ufstarfleet.org/images/thumb/4/47/UFS_Command_copia.png/350px-UFS_Command_copia.png"
              className="departments-image1"
            />
          </Link>
          <h1 className="departments-text06">COMMAND</h1>
          <span className="departments-text07">
            <span>Intelligence</span>
            <br></br>
            <span>Tactical</span>
            <br></br>
          </span>
        </div>
        <div className="departments-container4">
          <Link to="/science" className="departments-navlink2">
            <img
              alt="image"
              src="https://lcars.ufstarfleet.org/images/thumb/d/d6/UFS_Science_Logo.png/350px-UFS_Science_Logo.png"
              className="departments-image2"
            />
          </Link>
          <h1 className="departments-text12">SCIENCES</h1>
          <span className="departments-text13">
            <span>Research</span>
            <br></br>
            <span>Medical</span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Departments
