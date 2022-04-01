import React from "react"

import { rhythm } from "../../utils/typography"
import Img from "gatsby-image"

const DishImg = ({recipe}) => (
  <div css={{ width: `calc(1/2*100% - (1 - 1/2) * ${rhythm(2)})` }}>
    <Img
      fluid={
        recipe.relationships.image.relationships.imageFile
        .localFile.childImageSharp.fluid
      }
    />
  </div>
)

export default DishImg