import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './server-info.css'

const ServerInfo = (props) => {
  return (
    <div className="server-info-container">
      <Helmet>
        <title>ServerInfo - prowler</title>
        <meta property="og:title" content="ServerInfo - prowler" />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="server-info-container01">
        <div className="server-info-container02">
          <div className="server-info-container03">
            <h1 className="server-info-text">Staff Teams</h1>
          </div>
        </div>
        <div className="server-info-container04">
          <div className="server-info-container05">
            <h1 className="server-info-text01">Character Staff</h1>
            <span className="server-info-text02">
              Character Staff, as the title suggests, help players with their
              characters. They approve, deny, and suggest amendments to
              characters. They may also be available for creative input for new
              characters. They&apos;re here to guide you through the creation
              process. Character Staff are also responsible for maintaing the
              stringent guidelines of custom species. Contact them for any
              questions regarding submissions.
            </span>
          </div>
          <div className="server-info-container06">
            <h1 className="server-info-text03">Loremasters</h1>
            <span className="server-info-text04">
              Loremasters are responsible for maintaining the server&apos;s lore
              and are generally knowledgeable within the lore of Star Trek
              itself. They are here to help new players understand the server
              lore as well as maintaining the lore database. Loremasters are
              also tasked with being gamemasters, playing NPCs and running
              different events. If you have any questions about the lore, plot,
              or storyline these guys are the ones to go to. They may come up
              with consequences for in-character actions, they may dictate
              combat, etc as well. If you need a plot, narrator, etc, contact
              one of them.
            </span>
          </div>
          <div className="server-info-container07">
            <h1 className="server-info-text05">Moderators</h1>
            <span className="server-info-text06">
              These members are the general staff team. They deal with the
              moderation of channels (both out of character as well as in
              character channels) as well as managing other aspects of the
              server. They are available to help players with any questions,
              concerns, or comments. You will go to them whenever you have a
              report as well. You can think of them as just the catch-all of
              staff. Though they typically will not delve into events management
              or character management unless they are on those respective teams
              as well.
            </span>
          </div>
        </div>
        <div className="server-info-container08">
          <h1 className="server-info-text07">Channels</h1>
        </div>
        <div className="server-info-container09">
          <div className="server-info-container10">
            <h1 className="server-info-text08">General</h1>
            <span className="server-info-text09">
              <span>
                Any channel under the Chathouse category is considered a
                general, out of roleplay, channel. You can use these channels to
                plan roleplay as well. Please use the channels as their intended
                purpose. You can use bot commands in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="server-info-text11">#bot-commands</span>
              <span>
                , but please use the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="server-info-text13">#tupper</span>
              <span>
                {' '}
                channel when using the Tupper bot for setting up or editing
                character tuppers.
              </span>
            </span>
          </div>
          <div className="server-info-container11">
            <h1 className="server-info-text15">Media</h1>
            <span className="server-info-text16">
              <span>
                Links, images, and other forms of media need to be posted in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="server-info-text18">#⁠memes-n-media</span>
              <span>
                . If they are posted anywhere else they will be automatically
                deleted and a warning added onto your account. If you wish to
                share your artwork (created by you), you must have the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="server-info-text20">@Roleplayer</span>
              <span>
                {' '}
                role and you can post that in ⁠artwork. Otherwise post in
                memes-n-media and discuss it there.
              </span>
            </span>
          </div>
          <div className="server-info-container12">
            <h1 className="server-info-text22">Starboard</h1>
            <span className="server-info-text23">
              <span className="server-info-text24">
                We utilize a Starboard instead of pins for generic messages. Any
                message that receives 4x ⭐ reactions will be posted in the ⁠
              </span>
              <span className="server-info-text25">#starboard</span>
              <span className="server-info-text26">
                {' '}
                channel. You cannot self-react and refrain from starring any non
                family-friendly content. You can star any message so long as it
                follows server rules, including roleplay and out of character
                messages.
              </span>
              <br className="server-info-text27"></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServerInfo
