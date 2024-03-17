import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './characters.css'

const Characters = (props) => {
  return (
    <div className="characters-container">
      <Helmet>
        <title>Characters - prowler</title>
        <meta property="og:title" content="Characters - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name11"></Header>
      <div className="characters-container1">
        <div className="characters-container2">
          <img
            alt="image"
            src="/draven-300w.png"
            className="characters-image"
          />
          <span className="characters-text">
            <span>
              Vice Admiral Celeste Draven, a distinguished Starfleet officer,
              born on November 31st, 2571, in Paris, Earth, has left an
              indelible mark through her exemplary service and visionary
              leadership. Beyond her notable diplomatic achievements and
              numerous accolades, Draven&apos;s enduring legacy is encapsulated
              in her groundbreaking research and development of the
              Prowler-class starship. Her visionary approach extended beyond
              conventional design, incorporating assimilation-resistant
              technologies and subspace manipulation principles. Under her
              meticulous guidance, the Quantum Harmonic Subspace Propulsion
              System (QHSPS) and the Hyperphase Beam were developed, defying
              conventional warp drives and exemplifying Starfleet&apos;s
              adaptability. The Prowler-class stands as a pioneering force in
              deep space exploration and defense, a testament to Vice Admiral
              Celeste Draven&apos;s profound impact on Starfleet&apos;s
              technological landscape.
            </span>
            <br></br>
          </span>
        </div>
        <div className="characters-container3">
          <span className="characters-text3">
            Dr. Elias Kovari, a prominent figure in Starfleet&apos;s scientific
            community, has made groundbreaking contributions to subspace physics
            and assimilation-resistant technologies throughout his distinguished
            career. Born on May 19th in New Colony III, Kovari&apos;s early
            fascination with the cosmos led to a lifelong pursuit of knowledge.
            Enrolling at Starfleet Academy, he excelled in subspace physics and
            showcased an innovative approach to problem-solving. Kovari&apos;s
            career saw a transformative phase during the Borg campaigns, where
            his expertise in subspace physics became crucial in developing
            counterstrategies. The post-Borg era marked his shift towards
            subspace manipulation principles, resulting in the creation of the
            Hyperphase Beam—a directed energy weapon revolutionizing
            Starfleet&apos;s offensive capabilities. Kovari&apos;s legacy
            extends beyond weaponry, with ongoing contributions to subspace
            physics, collaborations, and numerous accolades, including the
            Cochrane Medal and Federation Science Merit Award, recognizing his
            enduring impact on scientific advancements within Starfleet.
          </span>
          <img
            alt="image"
            src="/kovari-300w.png"
            className="characters-image1"
          />
        </div>
        <div className="characters-container4">
          <img alt="image" src="/dax-300w.png" className="characters-image2" />
          <span className="characters-text4">
            Lieutenant Commander Sera Dax has etched her name in the annals of
            technological innovation through her pivotal role in developing the
            Hyperphase Beam. Born on Trill Prime, Sera&apos;s early fascination
            with subspace mechanics and directed energy weaponry paved the way
            for a stellar career. Enrolling at Starfleet Academy, her expertise
            in subspace physics and tactical acumen quickly garnered attention.
            Assigned to the Operation&apos;s Research division, Lieutenant
            Commander Dax spearheaded the collaborative effort that led to the
            conceptualization and realization of the Hyperphase Beam. Drawing
            inspiration from the challenges faced during encounters with
            assimilation-resistant technologies, Sera&apos;s ingenuity and
            leadership were instrumental in creating a directed energy weapon
            that redefined Starfleet&apos;s offensive capabilities. The
            successful integration of the Hyperphase Beam stands as a testament
            to Lieutenant Commander Sera Dax&apos;s ingenuity, adaptability, and
            enduring impact on Starfleet&apos;s technological advancements.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Characters
