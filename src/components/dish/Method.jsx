import React from "react"
import { rhythm } from "../../utils/typography"

const Method = ({recipe}) => (
  <div css={{ width: `calc(1/2*100% - (1 - 1/2) * ${rhythm(1.5)})` }}>
    <h3>Method</h3>
    <ul>
      {recipe.instructions &&
        recipe.instructions
          .split(`.,`)
          .map(i => <li key={i}>{i}</li>)}
    </ul>
  </div>
)

export default Method