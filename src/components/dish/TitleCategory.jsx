import React from "react"

const TitleCategory = ({recipe}) => (
  <>
    <h1>{recipe.title}</h1>
    <p>
      <strong>Category:</strong> {recipe.relationships.category.name}
    </p>
  </>
)

export default TitleCategory