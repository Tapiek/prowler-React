import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './operations.css'

const Operations = (props) => {
  return (
    <div className="operations-container">
      <Helmet>
        <title>Operations - prowler</title>
        <meta property="og:title" content="Operations - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name14"></Header>
      <div className="operations-container01">
        <div className="operations-container02">
          <h1 className="operations-text">OPERATIONS</h1>
        </div>
        <div className="operations-container03">
          <div className="operations-container04">
            <span className="operations-text01">
              <span>
                Engineering: At the heart of the vessel lies the Engineering
                team. They maintained and optimize the vessel&apos;s core
                systems (the warp drive, impulse engines, power systems, etc).
                They troubleshoot technical glitches, perform repairs, and
                ensure the ship functions optimally.
              </span>
              <br></br>
              <br></br>
              <span>
                Security: Security personnel form the protective shield within
                the ship. They handle internal threats, defense protocols, and
                combat readiness. Security repels any threat that the vessel may
                face within.
              </span>
              <br></br>
              <br></br>
              <span>
                Operations: Operations oversees logistics, administrations, and
                coordination. They manage crew assignments, supply distribution,
                and communication channels. Operations interpret sensor data,
                adjust environmental conditions, handle all cargo manifests, and
                maintain emergency readiness. 
              </span>
              <br></br>
            </span>
          </div>
          <div className="operations-container05">
            <img
              alt="image"
              src="https://lcars.ufstarfleet.org/images/thumb/d/d6/UFS_Science_Logo.png/350px-UFS_Science_Logo.png"
              className="operations-image"
            />
          </div>
        </div>
        <div className="operations-container06">
          <h1 className="operations-text10">Typical Positions</h1>
        </div>
        <div className="operations-container07">
          <div className="operations-container08">
            <span className="operations-text11">Science</span>
            <span className="operations-text12">
              <span>- Warp Field Specialist</span>
              <br></br>
              <span>- Impulse Drive Technician</span>
              <br></br>
              <span>- Power Systems Engineer</span>
              <br></br>
              <span>- Structural Engineer</span>
              <br></br>
              <span>- Environmental Technician</span>
              <br></br>
              <span>- Containment Specialist</span>
              <br></br>
            </span>
          </div>
          <div className="operations-container09">
            <span className="operations-text25">medicine</span>
            <span className="operations-text26">
              <span>- Sensor Analyst</span>
              <br></br>
              <span>- Communications officer</span>
              <br></br>
              <span>- navigation Officer</span>
              <br></br>
              <span>- Shuttlebay Manager</span>
              <br></br>
              <span>- Auxiliary Controller</span>
              <br></br>
              <span>- Helm Control</span>
              <br></br>
            </span>
          </div>
          <div className="operations-container10">
            <span className="operations-text39">research</span>
            <span className="operations-text40">
              <span>- Investigator</span>
              <br></br>
              <span>- Security Liaison</span>
              <br></br>
              <span>- Emergency Response Team</span>
              <br></br>
              <span>- Internal Security Officer</span>
              <br></br>
              <span>- Brig Manager</span>
              <br></br>
              <span>- Surveillance Officer</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Operations
