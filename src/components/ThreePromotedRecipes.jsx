import React from "react"

import Container from "./container"
import TopRecipe from "./TopRecipe"
import TwoPromotedRecipes from "./TwoPromotedRecipes"

const ThreePromotedRecipes = ({topRecipe, twoRecipes}) => (
  <Container>
  <div
    css={{
      "@media(min-width: 800px)": {
        display: `flex`,
        justifyContent: `space-between`,
      },
    }}
  >
    <TopRecipe recipe={topRecipe} />
    <TwoPromotedRecipes recipes={twoRecipes} />
  </div>
  </Container>
)

export default ThreePromotedRecipes
