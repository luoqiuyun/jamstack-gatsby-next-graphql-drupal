import React from "react"

import { rhythm } from "../../utils/typography"
import TitleCategory from "./TitleCategory"
import DishImg from "./DishImg"
import Facts from "./Facts"

const TheDish = ({recipe}) => (
  <>
    <TitleCategory recipe={recipe} />
    <div
      css={{
        display: `flex`,
        justifyContent: `space-between`,
        marginBottom: rhythm(2),
      }}
    >
      <DishImg recipe={recipe} />
      <Facts recipe={recipe} />
    </div>
  </>
)

export default TheDish