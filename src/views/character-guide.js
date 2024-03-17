import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './character-guide.css'

const CharacterGuide = (props) => {
  return (
    <div className="character-guide-container">
      <Helmet>
        <title>CharacterGuide - prowler</title>
        <meta property="og:title" content="CharacterGuide - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name9"></Header>
      <div className="character-guide-container1">
        <div className="character-guide-container2">
          <h1 className="character-guide-text">CHARACTERS</h1>
          <span className="character-guide-text01">
            <span className="character-guide-text02">Character Limit</span>
            <br></br>
            <br></br>
            <span>
              Each person is allowed up to two characters. Your highest ranking
              character will be your primary character unless you tell Character
              Staff otherwise. You may be in two scenes at once (or two
              &quot;bubbles&quot;) with each character at a time given that no
              event is going on. You are allowed one senior staff character at a
              time.
            </span>
            <br></br>
            <br></br>
            <span className="character-guide-text08">
              Character Ranks &amp; Positions
            </span>
            <br></br>
            <br></br>
            <span>
              When making a character the default rank is Ensign unless
              specified otherwise and the character sheet matches the requested
              rank. If Character Staff disagree that a person&apos;s rank
              matches their backstory they will lower the rank given on
              approval. Anything higher than Lieutenant will have to consult
              with both Character Staff
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="character-guide-text12">and</span>
            <span> Loremasters to ensure a balance is maintained.</span>
            <br></br>
            <br></br>
            <span className="character-guide-text16">Tupper</span>
            <br></br>
            <br></br>
            <span>
              We use Tupperbox for the management of multiple characters. It is
              mandatory even if you only have one character. Please format your
              tupper to the following
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="character-guide-text20">
              Position First Last | DEPT
            </span>
            <span>
              , ie
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="character-guide-text22">Lt. John Smith | CMD</span>
            <span>
              . You can register tuppers by using the command tul!register. If
              you need help please ping Character Staff. Please use the #tupper
              channel for all tupper maintenance. 
            </span>
            <br></br>
          </span>
        </div>
        <div className="character-guide-container3">
          <h1 className="character-guide-text25">SPECIES</h1>
          <span className="character-guide-text26">
            <span className="character-guide-text27">Custom Species</span>
            <br></br>
            <br></br>
            <span>
              You are allowed to submit one custom species. You will have to use
              our  template and follow a strict set of guidelines when
              submitting to make sure it is lore appropriate. We do encourage
              the use of canon races, but we don&apos;t shy away from custom
              ones.
            </span>
            <br></br>
            <br></br>
            <span>
              Any approved species will be documented in pdf form to prevent any
              changing. If you wish to make updates or changes please contact
              Character Staff or Loremasters.
            </span>
            <br></br>
            <br></br>
            <span className="character-guide-text36">Restricted Species</span>
            <br></br>
            <br></br>
            <span>
              You may not play any  of the following species as they are fully
              restricted.
            </span>
            <br></br>
            <span className="character-guide-text41">
              Q, Changelings, Founders, Borg (full), Voth, Vorta
            </span>
            <br></br>
            <br></br>
            <span>
              You may only play any of the following if there are openings and 
              you consult character staff prior to submitting.
            </span>
            <br></br>
            <span className="character-guide-text46">
              Borg (Liberated) [0/1], Android [0/1], Cybernetic (Major) [0/1]
            </span>
            <br></br>
            <br></br>
            <span>
              Additionally, you may not play as a species without a common name
              (ie Species 8472) unless they are a major species and relevant to
              the roleplay. Any member of a species that is not a member of the
              federation, or who does not typically join Starfleet, is
              restricted. Consult Character Staff prior to submitting these
              kinds of characters.
            </span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CharacterGuide
