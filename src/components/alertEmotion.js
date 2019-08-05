import PropTypes from "prop-types"
import React from "react"
import tokens from "../data/tokens"
import { css } from "@emotion/core"

const Alert = ({ type, heading, message  }) => (
  <div
    role="alert"
    css={css({
      background: tokens.alert.color.background[type],
      borderRadius: tokens.border.radius.default,
      boxShadow: tokens.shadow.default,
      color: tokens.alert.color.text[type],
      fontFamily: tokens.font.family.sansSerif,
      margin: `0 auto ${tokens.space.lg}px`,
      maxWidth: 500,
      padding: tokens.space.md,
      textAlign: 'left',
    })}
  >
    <div
      css={css({
        alignItems: 'center',
        display: 'flex',
      })}
    >
      <div
        css={css({
          paddingRight: tokens.space.md,
        })}
      >
        <span
          css={css({
            display: 'inline-block',
            fontSize: tokens.font.size.xxl,
            height: tokens.font.size.xxl,
            lineHeight: 1,
            width: tokens.font.size.xxl,
            '::before': {
              display: 'block',
              content: `"${tokens.alert.icon[type]}"`,
            }
          })}
        />
      </div>
      <div>
        <div
          css={css({
            fontWeight: 'bold',
            fontSize: tokens.font.size.lg,
          })}
        >
          {heading}
        </div>
        <div
          css={css({
            fontSize: tokens.font.size.md,
          })}
        >
          {message}
        </div>
      </div>
    </div>
  </div>   
)

Alert.propTypes = {
  type: PropTypes.oneOf(["error", "warning", "info", "success"]),
  heading: PropTypes.string,
  message: PropTypes.string
}

Alert.defaultProps = {
  type: "info",
  heading: undefined,
  message: undefined
}

export default Alert
