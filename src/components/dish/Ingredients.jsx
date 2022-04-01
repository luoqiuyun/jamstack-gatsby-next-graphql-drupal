import React from "react"
import { rhythm } from "../../utils/typography"

const Ingredients = ({recipe}) => (
  <div css={{ width: `calc(1/2*100% - (1 - 1/2) * ${rhythm(1.5)})` }}>
    <h3>Ingredients</h3>
    <ul>
      {recipe.ingredients &&
        recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
    </ul>
  </div>
)

export default Ingredients