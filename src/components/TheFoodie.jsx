import React from "react"

import Container from "./container"
import constants from "../utils/constants"

const TheFoodie = () => (
  <div
    css={{
      background: constants.darkYellow,
    }}
  >
    <Container>
      <h2>Sofia, the foodie</h2>
      <p>
        A foodie is a person who has an ardent or refined interest in food. 
        The related terms "gastronome" and "gourmet" define roughly the same 
        thing, i.e. a person who enjoys food for pleasure.
      </p>
    </Container>
  </div>
)

export default TheFoodie