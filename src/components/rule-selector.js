import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './rule-selector.css'

const RuleSelector = (props) => {
  const [ruleSelector, setRuleSelector] = useState(1)
  return (
    <div className={`rule-selector-container ${props.rootClassName} `}>
      <div className="rule-selector-container01">
        <div
          onClick={() => setRuleSelector(1)}
          className="rule-selector-container02"
        >
          <span className="rule-selector-text">{props.sRules}</span>
        </div>
        <div
          onClick={() => setRuleSelector(2)}
          className="rule-selector-container03"
        >
          <span className="rule-selector-text01">{props.dRules}</span>
        </div>
        <div
          onClick={() => setRuleSelector(3)}
          className="rule-selector-container04"
        >
          <span className="rule-selector-text02">{props.rRules1}</span>
        </div>
      </div>
      <div className="rule-selector-container05">
        <div className="rule-selector-container06">
          <div className="rule-selector-container07">
            <h1 className="rule-selector-text03">#1 - Respect &amp; Consent</h1>
            <span className="rule-selector-text04">
              <span className="">
                Treat all other players with respect. Avoid personal attacks,
                harassment, or bigotry. Obtain consent before introducing major
                plot points that involve other characters.
              </span>
              <br className=""></br>
            </span>
          </div>
          <div className="rule-selector-container08">
            <h1 className="rule-selector-text07">#2 - Stay in Character</h1>
            <span className="rule-selector-text08">
              Maintain interactions and roleplay in-character, especially in
              roleplay channels. Avoid breaking immersion with out-of-character
              comments whenever possible. Use [brackets] to indicate OOC chats.
            </span>
          </div>
          <div className="rule-selector-container09">
            <h1 className="rule-selector-text09">#3 - No Power Trips</h1>
            <span className="rule-selector-text10">
              Avoid taking absolute control over a scene involving other
              peoples&apos; characters. Each person should have agency when it
              comes to deciding what their characters do and when.
            </span>
          </div>
        </div>
        <div className="rule-selector-container10">
          <div className="rule-selector-container11">
            <h1 className="rule-selector-text11">#4 - Writing</h1>
            <span className="rule-selector-text12">
              Use detailed, vivid, and descriptive writing when roleplaying.
              Avoid one-liners  and one-sentence replies. Portray your
              characters thoughts, actions, surroundings, and emotions.
            </span>
          </div>
          <div className="rule-selector-container12">
            <h1 className="rule-selector-text13">#5 - Posting Order</h1>
            <span className="rule-selector-text14">
              Adhere to already established posting order when playing in a
              group setting or scene. Do not interrupt a scene unless you ask
              the participants if it is okay if you join.
            </span>
          </div>
          <div className="rule-selector-container13">
            <h1 className="rule-selector-text15">#6 - No Metagaming</h1>
            <span className="rule-selector-text16">
              Separate your knowledge from your character&apos;s knowledge. Do
              not use out of character information to influence your actions
              in-character. They do not have unlimited access to all information
              available.
            </span>
          </div>
        </div>
        <div className="rule-selector-container14">
          <div className="rule-selector-container15">
            <h1 className="rule-selector-text17">#7 - Lore Adherence</h1>
            <span className="rule-selector-text18">
              Respect previously established lore and precedent within the
              roleplay, and respect Star Trek canon as lore within the server.
              Maintain consistency and reliability when playing within the
              Prowler.
            </span>
          </div>
          <div className="rule-selector-container16">
            <h1 className="rule-selector-text19">#8 - Lore Development</h1>
            <span className="rule-selector-text20">
              Embrace opportunities to develop the lore and your character
              equally. Show the good, the bad, and the ugly for your character
              as not everybody is perfect. This includes events as well.
            </span>
          </div>
          <div className="rule-selector-container17">
            <h1 className="rule-selector-text21">#9 - Moderation</h1>
            <span className="rule-selector-text22">
              Follow the guidance of moderators and loremasters in resolving
              roleplay related conflicts. Report issues, disputes, and comments
              to moderators for immediate assistance, or ping them if needed.
            </span>
          </div>
        </div>
      </div>
      <div className="rule-selector-container18">
        <div className="rule-selector-container19">
          <div className="rule-selector-container20">
            <h1 className="rule-selector-text23">#1 - Be Respectful</h1>
            <span className="rule-selector-text24">
              <span className="">
                Treat all fellow members with a sense of respect. You can have
                disagreements, though avoid personal attacks and harassment. Any
                form of bigotry (racial, sexual, etc) will be removed and
                punished.
              </span>
              <br className=""></br>
            </span>
          </div>
          <div className="rule-selector-container21">
            <h1 className="rule-selector-text27">#2 - Relevancy</h1>
            <span className="rule-selector-text28">
              Keep all relevant messages into their related channels, and keep
              discussions on topic. Avoid interjecting random nonsense into
              established conversations.
            </span>
          </div>
          <div className="rule-selector-container22">
            <h1 className="rule-selector-text29">#3 - Explicit Content</h1>
            <span className="rule-selector-text30">
              Keep all content (incl. messages, media, and roleplay) to a PG13
              level. Limit profanity and other suggestive content. No sexually
              explicit or NSFW content is allowed in any server channels.
            </span>
          </div>
        </div>
        <div className="rule-selector-container23">
          <div className="rule-selector-container24">
            <h1 className="rule-selector-text31">#4 - Privacy</h1>
            <span className="rule-selector-text32">
              Maintain a sense of privacy across the server. Avoid sharing
              personal information, whether that&apos;s your own information or
              others&apos; information. Do not attempt to expose or dox others
              in any sense.
            </span>
          </div>
          <div className="rule-selector-container25">
            <h1 className="rule-selector-text33">#5 - No Advertising</h1>
            <span className="rule-selector-text34">
              Do not promote or advertise anything unless you are given explicit
              permission to do so. Any relevant links that aren&apos;t
              promotions can be posted in #memes-n-media. Otherwise contact
              staff for partnerships.
            </span>
          </div>
          <div className="rule-selector-container26">
            <h1 className="rule-selector-text35">#6 - Cooperation</h1>
            <span className="rule-selector-text36">
              Follow all instructions given to you by staff members. Do not
              argue or disrespect them. If you have issues with a staff member
              talk to .raynnn. 
            </span>
          </div>
        </div>
        <div className="rule-selector-container27">
          <div className="rule-selector-container28">
            <h1 className="rule-selector-text37">#7 - Adult Topics</h1>
            <span className="rule-selector-text38">
              If you are under 18 please be aware that there is adult topics
              here and you may come across it. Adults, please be aware of what
              you post and that minors may be exposed to it. Refer to rule 3 for
              explicit content awareness.
            </span>
          </div>
          <div className="rule-selector-container29">
            <h1 className="rule-selector-text39">#8 - No Politics</h1>
            <span className="rule-selector-text40">
              Avoid conversations surrounding politics or religion. We accept a
              diverse group of people, attitudes, and ideologies (as long as
              they are not harmful). Respect others as you wish to be respected.
            </span>
          </div>
          <div className="rule-selector-container30">
            <h1 className="rule-selector-text41">#9 - Common Sense</h1>
            <span className="rule-selector-text42">
              <span className="">
                Maintain common sense. If something seems wrong then it probably
                is. 
              </span>
              <br className=""></br>
              <br className=""></br>
              <span className="">
                Also, enjoy your time here! Engage in the roleplay and immerse
                yourself in the wonderful world of Star Trek.
              </span>
              <br className=""></br>
            </span>
          </div>
        </div>
      </div>
      <div className="rule-selector-container31">
        <div className="rule-selector-container32">
          <div className="rule-selector-container33">
            <h1 className="rule-selector-text48">#1 - Prime Directive</h1>
            <span className="rule-selector-text49">
              <span className="">
                All members must respect (or attempt therein) the prime
                directive. Avoid interference with the development of pre-warp
                civilizations and make any and all attempts to minimize any
                remnants left behind.
              </span>
              <br className=""></br>
            </span>
          </div>
          <div className="rule-selector-container34">
            <h1 className="rule-selector-text52">#2 - Chain of Command</h1>
            <span className="rule-selector-text53">
              Follow the in-universe Chain of Command, or consult the
              &quot;Ranks&quot; page if you need a refresher. Respect the ranks
              above you, use proper titles and resolve conflicts in a manner
              that is consistent with Starfleet standards.
            </span>
          </div>
          <div className="rule-selector-container35">
            <h1 className="rule-selector-text54">#3 - Technobabble</h1>
            <span className="rule-selector-text55">
              Incorporate technical language thoughtfully, or explain what you
              mean. Ensure it enhances rather than distracts from the story.
              Avoid redundant, unnecessary, or confusing technobabble and always
              provide an explanation.
            </span>
          </div>
        </div>
        <div className="rule-selector-container36">
          <div className="rule-selector-container37">
            <h1 className="rule-selector-text56">#4 - Regulations</h1>
            <span className="rule-selector-text57">
              <span className="">
                Become familiar with, and adhere to, Starfleet regulations and
                protocols. Your character should be well-versed in the relevant
                protocols that guide them. 
              </span>
              <br className=""></br>
              <br className=""></br>
              <span className="rule-selector-text61">
                Canon Starfleet Orders
              </span>
              <br className=""></br>
              <span className="rule-selector-text63">Expanded Regulations</span>
              <br className=""></br>
            </span>
          </div>
          <div className="rule-selector-container38">
            <h1 className="rule-selector-text65">#5 - Mission Focus</h1>
            <span className="rule-selector-text66">
              Keep in mind your character&apos;s primary role as well as
              directions given to them by superiors. Also keep in mind the
              overall mission of the ship and Starfleet when interacting
              in-universe. If you are confused, seek a superior.
            </span>
          </div>
          <div className="rule-selector-container39">
            <h1 className="rule-selector-text67">#6 - Character Consent</h1>
            <span className="rule-selector-text68">
              Gain consent for in-character interactions (ie sparring, training,
              etc). Respect boundaries and comfort levels. Do not read minds or
              use telepathy without explicit in-person consent being obtained.
            </span>
          </div>
        </div>
        <div className="rule-selector-container40">
          <div className="rule-selector-container41">
            <h1 className="rule-selector-text69">#7 - Be Consistent</h1>
            <span className="rule-selector-text70">
              Maintain some sort of consistency when it comes to playing your
              character. Do not swing from one mood to the next rapidly (unless
              that is a trait of your characters). 
            </span>
          </div>
          <div className="rule-selector-container42">
            <h1 className="rule-selector-text71">#8 -Collaboration!</h1>
            <span className="rule-selector-text72">
              Collaborate with coworkers and form interdisciplinary cohorts and
              form teams! Becomes friends and don&apos;t stay a hermit. Involve
              yourself in events, be there when it matters!
            </span>
          </div>
          <div className="rule-selector-container43">
            <h1 className="rule-selector-text73">A Tip :)</h1>
            <span className="rule-selector-text74">
              <span className="">
                Reference and adhere to established lore and guidelines,
                it&apos;ll make for a better playing environment.
              </span>
              <br className=""></br>
              <br className=""></br>
              <span className="">
                If you&apos;re confused, always ask! We&apos;re here to help,
                not hurt.
              </span>
              <br className=""></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

RuleSelector.defaultProps = {
  rRules1: 'Roleplay Rules',
  text5:
    "Avoid taking absolute control over a scene involving other peoples' characters. Each person should have agency when it comes to deciding what their characters do and when.",
  rootClassName: '',
  text4:
    'Maintain interactions and roleplay in-character, especially in roleplay channels. Avoid breaking immersion with out-of-character comments whenever possible. Use [brackets] to indicate OOC chats.',
  heading: '#1 - Respect & Consent',
  text6:
    'Treat all other players with respect. Avoid personal attacks, harassment, or bigotry. Obtain consent before introducing major plot points that involve other characters.',
  heading2: '#3 - No Power Trips',
  text2:
    "Avoid taking absolute control over a scene involving other peoples' characters. Each person should have agency when it comes to deciding what their characters do and when.",
  sRules: 'Server Rules',
  heading5: '#3 - No Power Trips',
  heading1: '#2 - Stay in Character',
  dRules: 'Discord Rules',
  text1:
    'Maintain interactions and roleplay in-character, especially in roleplay channels. Avoid breaking immersion with out-of-character comments whenever possible. Use [brackets] to indicate OOC chats.',
  heading4: '#2 - Stay in Character',
  text: 'Text',
  text3:
    'Treat all other players with respect. Avoid personal attacks, harassment, or bigotry. Obtain consent before introducing major plot points that involve other characters.',
  heading3: '#1 - Respect & Consent',
}

RuleSelector.propTypes = {
  rRules1: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  heading: PropTypes.string,
  text6: PropTypes.string,
  heading2: PropTypes.string,
  text2: PropTypes.string,
  sRules: PropTypes.string,
  heading5: PropTypes.string,
  heading1: PropTypes.string,
  dRules: PropTypes.string,
  text1: PropTypes.string,
  heading4: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  heading3: PropTypes.string,
}

export default RuleSelector
