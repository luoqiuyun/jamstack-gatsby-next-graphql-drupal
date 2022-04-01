import React from "react"
import Container from "./container"
import PromotionCard from "../components/PromotionCard"

const FourPromotedRecipes = ({recipes}) => (
  <Container>
    <h1 css={{ textAlign: `center` }}>Recipes</h1>
    <h2 css={{ textAlign: `center` }}>
      Explore recipes across every type of occasion, ingredients, and
      skill level
    </h2>
    <div
      css={{
        display: `flex`,
        justifyContent: `space-between`,
        flexWrap: `wrap`,
      }}
    >
      {recipes.map(recipe => (
        <PromotionCard
          recipe={recipe}
          columns={2}
          key={recipe.gatsbyPath}
        />
      ))}
    </div>
  </Container>
)

export default FourPromotedRecipes
