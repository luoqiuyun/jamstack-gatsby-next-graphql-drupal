import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import gray from "gray-percentage"
import Img from "gatsby-image"

const PromotionCard = ({
  recipe,
  square = false,
  columns = 4,
  marginBottom = rhythm(1 / 2),
}) => (
  <Link
    to={recipe.gatsbyPath}
    css={{
      color: `inherit`,
      textDecoration: `none`,
      display: `inline-block`,
      border: `1px solid ${gray(80)}`,
      width: `calc(1/${columns}*100% - (1 - 1/${columns}) * ${rhythm(
        1 / 2
      )})`,
      marginBottom,
    }}
  >
    <Img
      fluid={
        recipe.relationships.image.relationships.imageFile.localFile
          .childImageSharp.fluid
      }
    />
    <div
      css={{
        padding: `${rhythm(3 / 4)} ${rhythm(1)}`,
        width:
          recipe.relationships.image.relationships.imageFile.localFile
            .childImageSharp.fluid.width,
        height: square
          ? recipe.relationships.image.relationships.imageFile.localFile
              .childImageSharp.fluid.height
          : undefined,
      }}
    >
      <h4
        css={{
          fontFamily: `"Josefin Sans", sans-serif`,
          fontWeight: 400,
          marginBottom: rhythm(1 / 4),
          color: gray(50),
        }}
      >
        {recipe.relationships.category.name}
      </h4>
      <h3>{recipe.title}</h3>
    </div>
  </Link>
)

export default PromotionCard