import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import RuleSelector from '../components/rule-selector'
import './rules.css'

const Rules = (props) => {
  return (
    <div className="rules-container">
      <Helmet>
        <title>Rules - prowler</title>
        <meta property="og:title" content="Rules - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name16"></Header>
      <div className="rules-container1">
        <RuleSelector rootClassName="rule-selector-root-class-name"></RuleSelector>
      </div>
    </div>
  )
}

export default Rules
