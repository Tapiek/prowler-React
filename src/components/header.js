import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/" className="header-navlink">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="header-image"
        />
      </Link>
      <div data-thq="thq-dropdown" className="header-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle">
          <div data-thq="thq-dropdown-arrow" className="header-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path
                d="M292.571 713.143v109.714c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857zM292.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857zM1024 713.143v109.714c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h548.571c30.286 0 54.857 24.571 54.857 54.857zM292.571 128v109.714c0 30.286-24.571 54.857-54.857 54.857h-182.857c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h182.857c30.286 0 54.857 24.571 54.857 54.857zM1024 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h548.571c30.286 0 54.857 24.571 54.857 54.857zM1024 128v109.714c0 30.286-24.571 54.857-54.857 54.857h-548.571c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h548.571c30.286 0 54.857 24.571 54.857 54.857z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
          <li data-thq="thq-dropdown" className="header-dropdown list-item">
            <Link to="/information" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle01"
              >
                <span className="header-text">{props.text3}</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="header-dropdown01 list-item">
            <Link to="/crew" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle02"
              >
                <span className="header-text01">{props.text4}</span>
              </div>
            </Link>
          </li>
          <li data-thq="thq-dropdown" className="header-dropdown02 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="header-dropdown-toggle03"
            >
              <span className="header-text02">{props.text5}</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="header-container">
        <div className="header-container1">
          <Link to="/" className="header-navlink03">
            <div className="header-container2">
              <span className="header-text03">{props.text}</span>
            </div>
          </Link>
          <div className="header-container3">
            <div
              data-thq="thq-dropdown"
              className="header-thq-dropdown1 list-item"
            >
              <Link to="/information" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle04"
                >
                  <span className="header-text04">
                    <span className="">{props.text6}</span>
                    <br className=""></br>
                  </span>
                </div>
              </Link>
              <ul
                data-thq="thq-dropdown-list"
                className="header-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown03 list-item"
                >
                  <Link to="/departments" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle05"
                    >
                      <span className="header-text07">{props.text7}</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown04 list-item"
                >
                  <Link to="/server-info" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle06"
                    >
                      <span className="header-text08">{props.text8}</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown05 list-item"
                >
                  <Link to="/rules" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle07"
                    >
                      <span className="header-text09">
                        <span className="">{props.text9}</span>
                        <br className=""></br>
                      </span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown06 list-item"
                >
                  <Link to="/guides" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle08"
                    >
                      <span className="header-text12">
                        <span className="">{props.text91}</span>
                        <br className=""></br>
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-container4">
            <div
              data-thq="thq-dropdown"
              className="header-thq-dropdown2 list-item"
            >
              <Link to="/crew" className="">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle09"
                >
                  <span className="header-text15">
                    <span className="">{props.text10}</span>
                    <br className=""></br>
                  </span>
                </div>
              </Link>
              <ul
                data-thq="thq-dropdown-list"
                className="header-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown07 list-item"
                >
                  <Link to="/senior-staff" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle10"
                    >
                      <span className="header-text18">{props.text11}</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown08 list-item"
                >
                  <Link to="/crew" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle11"
                    >
                      <span className="header-text19">{props.text12}</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown09 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle12"
                  >
                    <span className="header-text20">{props.text13}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-container5">
            <div
              data-thq="thq-dropdown"
              className="header-thq-dropdown3 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle13"
              >
                <span className="header-text21">
                  <span className="">{props.text14}</span>
                  <br className=""></br>
                </span>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="header-dropdown-list3"
              >
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown10 list-item"
                >
                  <Link to="/history" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle14"
                    >
                      <span className="header-text24">{props.text15}</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown11 list-item"
                >
                  <Link to="/prowler-class" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle15"
                    >
                      <span className="header-text25">{props.text16}</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown12 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle16"
                  >
                    <span className="header-text26">{props.text17}</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown13 list-item"
                >
                  <Link to="/characters" className="">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle17"
                    >
                      <span className="header-text27">
                        <span className="">{props.text18}</span>
                        <br className=""></br>
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="https://discord.gg/cJMCBw4a2b"
            target="_blank"
            rel="noreferrer noopener"
            className="header-link"
          >
            <div className="header-container6">
              <span className="header-text30">{props.text2}</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text5: 'Lore',
  text16: 'Prowler-class',
  text15: 'History',
  text17: 'Hyperphase',
  imageSrc: '/logo-1500h.png',
  text14: 'Lore',
  text8: 'Server Info',
  text4: 'Crew',
  text1: 'Lore',
  text10: 'Crew',
  rootClassName: '',
  text6: 'Info',
  text9: 'Rules',
  text2: 'Discord\n',
  text18: 'Characters',
  text12: 'Crew Manifest',
  text91: 'Guides',
  text13: 'Rank Structure',
  imageAlt: 'logo',
  text7: 'Departments',
  text3: 'Info',
  text: 'Home',
  text11: 'Senior Staff',
}

Header.propTypes = {
  text5: PropTypes.string,
  text16: PropTypes.string,
  text15: PropTypes.string,
  text17: PropTypes.string,
  imageSrc: PropTypes.string,
  text14: PropTypes.string,
  text8: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text10: PropTypes.string,
  rootClassName: PropTypes.string,
  text6: PropTypes.string,
  text9: PropTypes.string,
  text2: PropTypes.string,
  text18: PropTypes.string,
  text12: PropTypes.string,
  text91: PropTypes.string,
  text13: PropTypes.string,
  imageAlt: PropTypes.string,
  text7: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
}

export default Header
