import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './crew.css'

const Crew = (props) => {
  return (
    <div className="crew-container">
      <Helmet>
        <title>Crew - prowler</title>
        <meta property="og:title" content="Crew - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="crew-container1">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRm3owPdB0n3qYf58ZCe7LaFgr_oPuFi_Br7r_eQok4CyO3oh6gWXAqrvtw22UxDHPIZZsDFEA_bqEP/pubhtml?gid=247031052&amp;single=true"
          allowFullScreen="true"
          className="crew-iframe"
        ></iframe>
      </div>
    </div>
  )
}

export default Crew
