import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import gray from "gray-percentage"
import Img from "gatsby-image"

const TopRecipe = ({ recipe }) => (
  <Link
    to={recipe.gatsbyPath}
    css={{
      display: `block`,
      color: `inherit`,
      border: `1px solid ${gray(80)}`,
      marginBottom: rhythm(1),
      "@media(min-width: 800px)": {
        marginBottom: 0,
        width: `calc(1/2*100% - (1 - 1/2) * ${rhythm(1 / 2)})`,
      },
    }}
  >
    <div
      css={{
        display: `inline-block`,
        padding: `${rhythm(3 / 4)} ${rhythm(1)}`,
      }}
    >
      <h4
        css={{
          fontFamily: `"Josefin Sans", sans-serif`,
          fontWeight: 400,
          margin: 0,
          color: gray(50),
        }}
      >
        Our Recipe Pick
      </h4>
      <h2>{recipe.title}</h2>
    </div>
    <Img
      fluid={
        recipe.relationships.image.relationships.imageFile.localFile
          .childImageSharp.fluid
      }
    />
  </Link>
)

export default TopRecipe