import React from "react"
import { css } from "@emotion/core"

const LogoBSV = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
	  width="32px"
    height="32px"
    viewBox="0 0 32 32"
    css={css({
      display: 'block',
      height: 'auto',
      width: '24px',
    })}
  >
    <title>CSS Box-model Visualizer</title>
    <rect fill="#FF3F53" width="32" height="32"/>
    <rect y="8" fill="#FF9000" width="24" height="24"/>
    <rect y="16" fill="#28E070" width="16" height="16"/>
    <rect y="24" fill="#00BEFF" width="8" height="8"/>
  </svg>
)
export default LogoBSV
