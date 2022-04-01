import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts"
import ThreePromotedRecipes from "../components/ThreePromotedRecipes"
import ThisMonthEdition from "../components/ThisMonthEdition"
import FourPromotedRecipes from "../components/FourPromotedRecipes"
import TheFoodie from "../components/TheFoodie"

class IndexPage extends React.Component {
  render() {
    const data = this.props.data
    const topRecipe = data.topRecipe.edges[8].node
    const twoRecipes = data.nextTwoPromotedRecipes.edges
    .map(edge => edge.node)
    const fourRecipes = data.nextFourPromotedRecipes.edges
    .map(edge => edge.node)

    return (
      <Layout>
        <div css={{ overflow: `hidden` }}>
          <ThreePromotedRecipes topRecipe={topRecipe} twoRecipes={twoRecipes} />
          <ThisMonthEdition />
          <FourPromotedRecipes recipes={fourRecipes} />
          <TheFoodie />
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    topRecipe: allRecipes(sort: { fields: [createdAt] }, limit: 10) {
      edges {
        node {
          title
          gatsbyPath(filePath: "/{Recipes.title}")
          relationships {
            image {
              relationships {
                imageFile {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 740, maxHeight: 555) {
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
    }
    nextTwoPromotedRecipes: allRecipes(
      sort: { fields: [createdAt] }
      limit: 2
      skip: 1
    ) {
      edges {
        node {
          title
          gatsbyPath(filePath: "/{Recipes.title}")
          relationships {
            category {
              name
            }
            image {
              relationships {
                imageFile {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 240, maxHeight: 240) {
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
    }
    nextFourPromotedRecipes: allRecipes(
      sort: { fields: [createdAt] }
      limit: 4
      skip: 3
    ) {
      edges {
        node {
          id
          title
          gatsbyPath(filePath: "/{Recipes.title}")
          relationships {
            category {
              name
            }
            image {
              relationships {
                imageFile {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 475, maxHeight: 475) {
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
    }
  }
`
