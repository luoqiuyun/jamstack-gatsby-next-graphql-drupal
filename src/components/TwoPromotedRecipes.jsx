import React from "react"
import PromotionCard from "./PromotionCard"

const TwoPromotedRecipes = ({recipes}) => (
  <>
    {recipes.map(recipe => (
      <PromotionCard
        recipe={recipe}
        square={true}
        columns={4}
        marginBottom={0}
        key={recipe.gatsbyPath}
      />
    ))}
  </>
)

export default TwoPromotedRecipes
