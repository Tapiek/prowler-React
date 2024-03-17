import React from 'react'

import { Helmet } from 'react-helmet'

import './information.css'

const Information = (props) => {
  return (
    <div className="information-container">
      <Helmet>
        <title>Information - prowler</title>
        <meta property="og:title" content="Information - prowler" />
      </Helmet>
    </div>
  )
}

export default Information
