import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './main.css'

const MAIN = (props) => {
  return (
    <div className="main-container">
      <Helmet>
        <title>MAIN - prowler</title>
        <meta property="og:title" content="MAIN - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="main-container1"></div>
    </div>
  )
}

export default MAIN
