import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './science.css'

const Science = (props) => {
  return (
    <div className="science-container">
      <Helmet>
        <title>Science - prowler</title>
        <meta property="og:title" content="Science - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name13"></Header>
      <div className="science-container01">
        <div className="science-container02">
          <h1 className="science-text">SCIENCE</h1>
        </div>
        <div className="science-container03">
          <div className="science-container04">
            <span className="science-text01">
              <span>
                Science: At the heart of the Science division lies dedicated
                officers. These skilled officers explore the mysteries of the
                galaxy, analyze cosmic data, ad conduct experiments and research
                to advance our understanding of the universe.
              </span>
              <br></br>
              <br></br>
              <span>
                Medicine: Medical personnel are dedicated to providing for the
                health and well-being of the crew. They provide medical care,
                conduct clinical research, and develop treatments for various
                diseases. The medical team ensures the overall health and
                wellness of the entire crew.
              </span>
              <br></br>
              <br></br>
              <span>
                Research: The research team focuses on scientific inquiry and
                development. Researchers conduct experiments and collaborate
                with other department to enhance Starfleet&apos;s understanding
                of the universe we live in.
              </span>
              <br></br>
            </span>
          </div>
          <div className="science-container05">
            <img
              alt="image"
              src="https://lcars.ufstarfleet.org/images/thumb/d/d6/UFS_Science_Logo.png/350px-UFS_Science_Logo.png"
              className="science-image"
            />
          </div>
        </div>
        <div className="science-container06">
          <h1 className="science-text10">Typical Positions</h1>
        </div>
        <div className="science-container07">
          <div className="science-container08">
            <span className="science-text11">Science</span>
            <span className="science-text12">
              <span>- Astrophysicist</span>
              <br></br>
              <span>- Exobiologist</span>
              <br></br>
              <span>- Stellar Cartographer</span>
              <br></br>
              <span>- Xenolinguist</span>
              <br></br>
              <span>- Quantum Physicist</span>
              <br></br>
              <span>- Chemist / Botanist</span>
              <br></br>
            </span>
          </div>
          <div className="science-container09">
            <span className="science-text25">medicine</span>
            <span className="science-text26">
              <span>- Physician</span>
              <br></br>
              <span>- Surgeon</span>
              <br></br>
              <span>- Nurse Practitioner</span>
              <br></br>
              <span>- Nurse / Aide</span>
              <br></br>
              <span>- Geneticist</span>
              <br></br>
              <span>- Counselor</span>
              <br></br>
            </span>
          </div>
          <div className="science-container10">
            <span className="science-text39">research</span>
            <span className="science-text40">
              <span>- Research Analyst</span>
              <br></br>
              <span>- Scientific Programmer</span>
              <br></br>
              <span>- Data scientist</span>
              <br></br>
              <span>- innovation researcher</span>
              <br></br>
              <span>- biotechnology researcher</span>
              <br></br>
              <span>- project manager</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Science
