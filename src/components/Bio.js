import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Rap2h`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(1),
          }}
        />
        <p>
          Written by <strong>Rap2h</strong> who lives and works in Nantes building useless shit.{' '}
          <a href="https://twitter.com/rap2h">
            You should NOT follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
