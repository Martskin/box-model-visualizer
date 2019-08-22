import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import tokens from "../data/tokens"

function Button({ label, disabled, variant, size, onClick }) {

  function getVariantProperties(variant) {
    let backgroundColorValue
    let borderColorValue
    let colorValue
    let backgroundHoverColorValue
    let borderHoverColorValue
    let hoverColorValue

    switch (variant) {
      case 'primary':
        backgroundColorValue = tokens.color.background.interactive.default
        borderColorValue = tokens.border.color.interactive.default
        colorValue = tokens.color.text.onInteractive
        backgroundHoverColorValue = tokens.color.background.interactive.hover.primary
        borderHoverColorValue = tokens.border.color.interactive.hover.primary
        hoverColorValue = tokens.color.text.onInteractive
        break
      case 'tertiary':
        backgroundColorValue = tokens.color.background.default
        borderColorValue = tokens.border.color.interactive.tertiary
        colorValue = tokens.color.text.interactive.tertiary
        backgroundHoverColorValue = tokens.color.background.interactive.hover.default
        borderHoverColorValue = tokens.border.color.interactive.hover.default
        hoverColorValue = tokens.color.text.interactive.default
        break
      default:
        backgroundColorValue = tokens.color.background.default
        borderColorValue = tokens.border.color.interactive.default
        colorValue = tokens.color.text.interactive.default
        backgroundHoverColorValue = tokens.color.background.interactive.hover.default
        borderHoverColorValue = tokens.border.color.interactive.hover.default
        hoverColorValue = tokens.color.text.interactive.default
    }

    return (
      {
        background: backgroundColorValue,
        borderColor: borderColorValue,
        color: colorValue,
        ':hover': {
          background: backgroundHoverColorValue,
          borderColor: borderHoverColorValue,
          color: hoverColorValue,
        },
      }
    )
  }

  function getSizeProperties(size) {
    let fontValue
    let vPadding
    let hPadding

    switch (size) {
      case 'small':
        fontValue = tokens.font.size.xs
        vPadding = tokens.space.xxs
        hPadding = tokens.space.xs
        break
      case 'large':
        fontValue = tokens.font.size.md
        vPadding = tokens.space.sm
        hPadding = tokens.space.md
        break
      default:
        fontValue = tokens.font.size.sm
        vPadding = tokens.space.xs
        hPadding = tokens.space.sm
    }

    return (
      {
        fontSize: fontValue,
        paddingBottom: vPadding,
        paddingLeft: hPadding,
        paddingRight: hPadding,
        paddingTop: vPadding,
      }
    )
  }

  return (
    <button
      css={css({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: tokens.border.radius.interactive,
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: tokens.font.family.sansSerif,
        lineHeight: 1,
        margin: 0,
        overflow: 'visible',
        outline: 'none',
        ...getVariantProperties(variant),
        ...getSizeProperties(size),
        width: 'auto',
        ':disabled': {
          background: tokens.color.background.interactive.disabled,
          borderColor: tokens.border.color.interactive.disabled,
          color: tokens.color.text.interactive.disabled,
          pointerEvents: 'none',
        },
        '& + button': {
          marginLeft: tokens.space.xs,
        },
        ':focus': {
          boxShadow: tokens.shadow.focus,
        }
      })}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  label: undefined,
  disabled: false,
  variant: 'secondary',
  size: 'medium',
  onClick: null,
}

export default Button
