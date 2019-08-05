import React from "react"
import { css } from "@emotion/core"

const Input = ( {onChange} ) => (
  <div>
    <input
      css={css({
        border: "1px solid red", 
      })}
      type="text"
      onChange={(evt) => onChange(evt.target.value)}
    />
  </div>
)

export default Input
