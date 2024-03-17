import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './senior-staff.css'

const SeniorStaff = (props) => {
  return (
    <div className="senior-staff-container">
      <Helmet>
        <title>SeniorStaff - prowler</title>
        <meta property="og:title" content="SeniorStaff - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name6"></Header>
      <div className="senior-staff-container01">
        <div className="senior-staff-container02">
          <div className="senior-staff-container03">
            <div className="senior-staff-container04">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="senior-staff-image"
              />
            </div>
            <span className="senior-staff-text">
              <span className="senior-staff-text01">Commanding Officer</span>
              <br className="senior-staff-text02"></br>
              <span className="senior-staff-text03">n/a</span>
              <br></br>
            </span>
          </div>
          <div className="senior-staff-container05">
            <div className="senior-staff-container06">
              <Link to="/tkai" className="senior-staff-navlink">
                <img
                  alt="image"
                  src="/tkai1-300w.png"
                  className="senior-staff-image01"
                />
              </Link>
            </div>
            <span className="senior-staff-text05">
              <span className="senior-staff-text06">Executive Officer</span>
              <br className="senior-staff-text07"></br>
              <span className="senior-staff-text08">Thrax T&apos;Kai</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="senior-staff-container07">
          <div className="senior-staff-container08">
            <div className="senior-staff-container09">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="senior-staff-image02"
              />
            </div>
            <span className="senior-staff-text10">
              <span className="senior-staff-text11">
                Chief Tactical Officer
              </span>
              <br className="senior-staff-text12"></br>
              <span className="senior-staff-text13">n/a</span>
              <br></br>
            </span>
          </div>
          <div className="senior-staff-container10">
            <div className="senior-staff-container11">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="senior-staff-image03"
              />
            </div>
            <span className="senior-staff-text15">
              <span className="senior-staff-text16">
                Chief Intelligence Officer
              </span>
              <br className="senior-staff-text17"></br>
              <span className="senior-staff-text18">n/a</span>
              <br></br>
            </span>
          </div>
          <div className="senior-staff-container12">
            <div className="senior-staff-container13">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="senior-staff-image04"
              />
            </div>
            <span className="senior-staff-text20">
              <span className="senior-staff-text21">Chief Science Officer</span>
              <br className="senior-staff-text22"></br>
              <span className="senior-staff-text23">n/a</span>
              <br></br>
            </span>
          </div>
          <div className="senior-staff-container14">
            <div className="senior-staff-container15">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="senior-staff-image05"
              />
            </div>
            <span className="senior-staff-text25">
              <span className="senior-staff-text26">Chief Medical Officer</span>
              <br className="senior-staff-text27"></br>
              <span className="senior-staff-text28">n/a</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="senior-staff-container16">
          <div className="senior-staff-container17">
            <div className="senior-staff-container18">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="senior-staff-image06"
              />
            </div>
            <span className="senior-staff-text30">
              <span className="senior-staff-text31">
                Chief Operations Officer
              </span>
              <br className="senior-staff-text32"></br>
              <span className="senior-staff-text33">n/a</span>
              <br></br>
            </span>
          </div>
          <div className="senior-staff-container19">
            <div className="senior-staff-container20">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="senior-staff-image07"
              />
            </div>
            <span className="senior-staff-text35">
              <span className="senior-staff-text36">
                Chief Engineering Officer
              </span>
              <br className="senior-staff-text37"></br>
              <span className="senior-staff-text38">n/a</span>
              <br></br>
            </span>
          </div>
          <div className="senior-staff-container21">
            <div className="senior-staff-container22">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="senior-staff-image08"
              />
            </div>
            <span className="senior-staff-text40">
              <span className="senior-staff-text41">Chief of Security</span>
              <br className="senior-staff-text42"></br>
              <span className="senior-staff-text43">n/a</span>
              <br></br>
            </span>
          </div>
          <div className="senior-staff-container23">
            <div className="senior-staff-container24">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="senior-staff-image09"
              />
            </div>
            <span className="senior-staff-text45">
              <span className="senior-staff-text46">Primary Helmsman</span>
              <br className="senior-staff-text47"></br>
              <span className="senior-staff-text48">n/a</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeniorStaff
