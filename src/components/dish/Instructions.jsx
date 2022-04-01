import React from "react"

import { rhythm } from "../../utils/typography"
import Ingredients from "./Ingredients"
import Method from "./Method"

const Instructions = ({recipe}) => (
  <div css={{ background: `white`, padding: rhythm(1.5) }}>
    <h2>What {`you'll`} need and how to make this dish</h2>
    <div css={{ display: `flex`, justifyContent: `space-between` }}>
      <Ingredients recipe={recipe} />
      <Method recipe={recipe} />
    </div>
  </div>
)

export default Instructions