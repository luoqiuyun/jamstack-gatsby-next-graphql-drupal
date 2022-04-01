import React from "react"
import { rhythm } from "../../utils/typography"

const Facts = ({recipe}) => (
  <div css={{ width: `calc(1/2*100% - (1 - 1/2) * ${rhythm(2)})` }}>
    <div>
      <strong>Preparation time:</strong>
    </div>
    <div>{recipe.preparationTime} minutes</div>
    <div>
      <strong>Cooking time:</strong>
    </div>
    <div>{recipe.totalTime} minutes</div>
    <div>
      <strong>Difficulty:</strong>
    </div>
    <div>{recipe.difficulty}</div>
  </div>
)

export default Facts