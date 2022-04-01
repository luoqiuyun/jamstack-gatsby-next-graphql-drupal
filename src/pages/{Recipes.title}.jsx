import { graphql } from "gatsby"
import React from "react"

import { rhythm } from "../utils/typography"
import constants from "../utils/constants"
import Layout from "../layouts"
import Container from "../components/container"
import TheDish from "../components/dish/TheDish"
import Instructions from "../components/dish/Instructions"

const RecipeTemplate = ({ data }) => (
  <Layout>
    <div
      css={{
        background: constants.paleYellow,
        padding: rhythm(1.5),
        paddingTop: 0,
        marginBottom: rhythm(3),
      }}
    >
      <Container>
        <TheDish recipe={data.recipe} />
        <Instructions recipe={data.recipe} />
      </Container>
    </div>
  </Layout>
)

export default RecipeTemplate

export const query = graphql`
  query($id: String!) {
    recipe: recipes(id: { eq: $id }) {
      title
      preparationTime
      difficulty
      totalTime
      ingredients
      instructions
      relationships {
        category {
          name
        }
        image {
          relationships {
            imageFile {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 470, maxHeight: 353) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
