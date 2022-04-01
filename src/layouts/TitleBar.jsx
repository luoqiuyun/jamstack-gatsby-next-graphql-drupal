import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Container from "../components/container"
import gray from "gray-percentage"

const TitleBar = () => (
  <Container paddingBottom={0} paddingTop={rhythm(1 / 2)}>
    <Link to="/">
      <div css={{ width: 193, overflow: `hidden` }}>
        <h1
          css={{
            color: gray(10),
            fontSize: scale(1.8).fontSize,
            margin: 0,
            fontFamily: `Rochester, serif`,
            float: `left`,
            fontDisplay: `block`,
          }}
        >
          &nbsp;Sofia
        </h1>
        <h4
          css={{
            color: gray(10),
            fontFamily: `"Josefin Sans", sans-serif`,
            marginBottom: 0,
            float: `right`,
          }}
        >
          Food Recipe Ideas
        </h4>
      </div>
    </Link>
    <div css={{ float: `right` }}>
      <Link
        to="/recipes/"
        css={{
          color: `inherit`,
          position: `relative`,
          bottom: rhythm(1.5),
          textDecoration: `none`,
          fontSize: scale(0.25).fontSize,
          ":hover": {
            textDecoration: `underline`,
          },
        }}
      >
        More Recipes . . .
      </Link>
    </div>
  </Container>
)

export default TitleBar