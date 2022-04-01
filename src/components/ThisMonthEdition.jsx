import React from "react"

import { rhythm } from "../utils/typography"
import constants from "../utils/constants"
import Container from "./container"
import gray from "gray-percentage"

const ThisMonthEdition = () => (
  <div
    css={{
      background: constants.darkYellow,
    }}
  >
    <Container
      css={{
        paddingLeft: rhythm(1),
      }}
    >
      <div css={{ maxWidth: rhythm(15) }}>
        <h2>In this {`month's`} edition</h2>
        <p>
          Quisque vitae pulvinar arcu. Aliquam ac pellentesque erat, at
          finibus massa.
        </p>
        <p>
          {` `}
          Suspendisse eget • leo sed • felis commodo • semper id • sed
          erat
        </p>
        <button
          css={{
            background: constants.darkGray,
            color: gray(75, 0, true),
            padding: `${rhythm(1 / 3)} ${rhythm(2 / 3)}`,
            lineHeight: 1.3,
            cursor: `pointer`,
          }}
        >
          More Sofia
        </button>
      </div>
    </Container>
  </div>
)

export default ThisMonthEdition
