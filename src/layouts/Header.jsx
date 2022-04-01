import React from "react"
import SearchIcon from "react-icons/lib/md/search"

import { rhythm } from "../utils/typography"
import constants from "../utils/constants"

const Header = () => (
  <header
    css={{
      background: constants.paleYellow,
    }}
  >
    <div
      css={{
        height: rhythm(1.5),
        margin: `0 auto`,
        maxWidth: 1024,
      }}
    >
      <span
        css={{
          marginLeft: rhythm(1 / 2),
        }}
      >
        <SearchIcon
          css={{
            fontSize: rhythm(1),
          }}
        />
        {` `}
        <span css={{ lineHeight: rhythm(1.5) }}>
          Search by keyword, ingredient, dish
        </span>
      </span>
      <span
        css={{
          float: `right`,
          marginRight: rhythm(1),
          lineHeight: rhythm(1.5),
        }}
      >
        Login
      </span>
    </div>
  </header>
)

export default Header