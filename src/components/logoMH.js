import React from "react"
import tokens from "../data/tokens"
import { css } from "@emotion/core"

const LogoMH = () => (
  <svg
    aria-labelledby="martin-hofmann-logo"
    xmlns="http://www.w3.org/2000/svg"
    width="80px"
    height="80px"
    viewBox="0 0 80 80"
    css={css({
        display: 'block',
        fill: tokens.color.text.secondary,
        height: 'auto',
        width: tokens.space.lg,
      })}
      >
      <title id="martin-hofmann-logo">MartinHofmann.com</title>
      <g>
          <polygon points="19.521,71.762 29.762,61.522 29.762,18.488 19.511,8.238 9.271,18.479 19.521,28.728"/>
          <polygon points="60.488,71.762 70.729,61.522 70.729,18.488 60.479,8.238 50.24,18.479 60.488,28.728"/>
          <polygon points="39.995,42.826 50.238,32.584 50.238,18.488 39.987,8.238 29.745,18.479 39.995,28.728"/>
          <polygon points="50.238,47.039 50.238,61.522 39.995,71.762 39.995,57.281"/>
      </g>
  </svg>
)
export default LogoMH
