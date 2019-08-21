import React from "react"
import tokens from "../data/tokens"
import { css } from "@emotion/core"

const IconEyeClosed = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-icon="eye-closed"
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
    d="M31.807,12.289C31.937,12.033,32,11.754,32,11.475h-2.784c0.001,0.001,0.002,0.003,0.003,0.004
      c-2.713,4.944-7.738,8-13.219,8s-10.505-3.056-13.218-8c0.001-0.001,0.002-0.003,0.002-0.004H0c0,0.279,0.063,0.559,0.193,0.814
      c1.286,2.51,3.114,4.669,5.314,6.324l-3.727,5.43l2.19,1.504l3.771-5.495c1.138,0.615,2.35,1.101,3.614,1.453l-1.238,6.525
      l2.609,0.495l1.235-6.511c0.67,0.079,1.348,0.13,2.038,0.13c0.659,0,1.307-0.048,1.947-0.12l1.233,6.501l2.609-0.495l-1.233-6.503
      c1.271-0.347,2.488-0.829,3.633-1.442l3.748,5.462l2.19-1.504l-3.695-5.384C28.66,16.998,30.509,14.821,31.807,12.289z"/>
  </svg>
)
export default IconEyeClosed
