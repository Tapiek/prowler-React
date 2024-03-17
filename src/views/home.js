import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>prowler</title>
        <meta property="og:title" content="prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-container1">
        <div className="home-container2">
          <div className="home-container3">
            <div className="home-container4">
              <span className="home-text">
                <span>
                  Greetings, Starfleet enthusiasts and cosmic explorers! Welcome
                  to the official website of the USS Prowler, a vessel at the
                  forefront of Starfleet&apos;s pursuit of knowledge, diplomacy,
                  and strategy within th vastness of the galaxy. 
                </span>
                <br></br>
                <br></br>
                <span>
                  Here, you&apos;ll embark on a journey through the USS Prowler,
                  a Prowler-class vessel. You&apos;ll delve into its advanced
                  technologies and it&apos;s groundbreaking Hyperphase Drive.
                  You&apos;ll be immersed into the rich and deep lore that
                  intertwines with the lore established by Star Trek. This
                  website serves as a comprehensive resource, curated to offer
                  you various insights into the ship, it&apos;s class, and its
                  crew. You&apos;ll also be introduced to the adventures that
                  unfold aboard the Prowler.
                </span>
                <br></br>
                <br></br>
                <span>
                  Whether you&apos;re a seasoned Officer, an avid Star Trek
                  nerd, or a newcomer eager to join us on our journey, this site
                  shall be your portal into a new universe. Feel free to
                  navigate the website and immerse yourself into the lore
                  crafted by the various Loremasters.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
