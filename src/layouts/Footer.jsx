import React from "react"

import { rhythm } from "../utils/typography"
import Container from "../components/container"
import constants from "../utils/constants"

const Footer = () => (
  <footer css={{ background: constants.paleYellow }}>
    <Container>
      <div css={{ maxWidth: `50%`, float: `left` }}>
        <p>
          <strong>Sofia Articles & Sofia Publications</strong> is a
          fictional Article and publisher for illustrative purposes only
        </p>
        <p>
          Read the
          {` `}
          <a href="https://github.com/gatsbyjs/gatsby/tree/master/examples/using-drupal">
            source from Sofia
          </a>
        </p>
      </div>
      <div
        css={{ float: `right`, maxWidth: `50%`, paddingLeft: rhythm(1) }}
      >
        Copyright {new Date().getFullYear()} Terms & Conditions
      </div>
    </Container>
  </footer>
)

export default Footer