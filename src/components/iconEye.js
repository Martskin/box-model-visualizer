import React from "react"
import tokens from "../data/tokens"
import { css } from "@emotion/core"

const IconEye = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-icon="eye"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    css={css({
      color: tokens.icon.color.default,
      height: 'auto',
      width: tokens.icon.size.default,
    })}
  >
    <path
      fill="currentColor"
      d="M21.06,15.964c0,2.791-2.261,5.051-5.052,5.051c-2.791,0-5.053-2.261-5.053-5.051c0-2.791,2.262-5.053,5.053-5.053
      C18.799,10.911,21.06,13.173,21.06,15.964z M31.807,15.189C28.794,9.311,22.83,5.333,16,5.333c-6.83,0-12.795,3.98-15.807,9.856
      c-0.258,0.51-0.258,1.112,0,1.621C3.206,22.689,9.17,26.666,16,26.666c6.83,0,12.795-3.979,15.807-9.855
      C32.064,16.301,32.064,15.699,31.807,15.189z M16,24c-5.48,0-10.505-3.056-13.218-8C5.495,11.056,10.519,8,16,8
      c5.48,0,10.505,3.056,13.219,8C26.506,20.944,21.48,24,16,24z"/>
  </svg>
)
export default IconEye
