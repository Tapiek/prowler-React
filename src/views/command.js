import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './command.css'

const Command = (props) => {
  return (
    <div className="command-container">
      <Helmet>
        <title>Command - prowler</title>
        <meta property="og:title" content="Command - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name12"></Header>
      <div className="command-container01">
        <div className="command-container02">
          <h1 className="command-text">COMMAND</h1>
        </div>
        <div className="command-container03">
          <div className="command-container04">
            <span className="command-text01">
              <span>
                Command: Command officers are tasked with the leadership,
                decision-making, and mission coordination of the overall vessel.
                They ensure effective communication of orders and the execution
                of them while leading the crew in various tasks and challenges.
              </span>
              <br></br>
              <br></br>
              <span>
                Intelligence: Intelligence officers are skilled espionage
                agents. They gather, analyze, and assess information while
                providing strategic insights. They specialize in cryptography,
                analysis, and threat assessment.
              </span>
              <br></br>
              <br></br>
              <span>
                Tactical: The Tactical department focuses on external and
                militaristic threats. They evaluate external combat strategy and
                defense while handling the weapons systems, developing battle
                plans, and ensuring the ship&apos;s readiness in case of of red
                alert.
              </span>
              <br></br>
            </span>
          </div>
          <div className="command-container05">
            <img
              alt="image"
              src="https://lcars.ufstarfleet.org/images/thumb/4/47/UFS_Command_copia.png/350px-UFS_Command_copia.png"
              className="command-image"
            />
          </div>
        </div>
        <div className="command-container06">
          <h1 className="command-text10">Typical Positions</h1>
        </div>
        <div className="command-container07">
          <div className="command-container08">
            <span className="command-text11">Intelligence</span>
            <span className="command-text12">
              <span>- Cryptographer</span>
              <br></br>
              <span>- Espionage Agent</span>
              <br></br>
              <span>- Threat Analyst</span>
              <br></br>
              <span>- Information Analyst</span>
              <br></br>
              <span>- Intelligence Operative</span>
              <br></br>
              <span>- Counter-intelligence Agent</span>
              <br></br>
            </span>
          </div>
          <div className="command-container09">
            <span className="command-text25">COMMAND</span>
            <span className="command-text26">
              <span>- Mission Coordinator</span>
              <br></br>
              <span>- Diplomatic Attaché</span>
              <br></br>
              <span>- Fleet Liaison</span>
              <br></br>
              <span>- Command Advisor</span>
              <br></br>
              <span>- J.A.G. Officer</span>
              <br></br>
              <span>- Yeoman</span>
              <br></br>
            </span>
          </div>
          <div className="command-container10">
            <span className="command-text39">TACTICAL</span>
            <span className="command-text40">
              <span>- Phaser Specialist</span>
              <br></br>
              <span>- Weapons Specialist</span>
              <br></br>
              <span>- Tactician</span>
              <br></br>
              <span>- Combat Strategist</span>
              <br></br>
              <span>- Offense Coordinator</span>
              <br></br>
              <span>- Emergency Response</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Command
