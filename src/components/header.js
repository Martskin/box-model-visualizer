import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tokens from "../data/tokens"
import { css } from "@emotion/core"
import LogoBMV from "./logoBMV"
import LogoMH from "./logoMH"
import LogoGH from "./logoGH"

const Header = ({ siteTitle }) => (
  <header
    css={css({
      backgroundColor: tokens.color.background.dark,
      color: tokens.color.text.onDark.default,
      fontFamily: tokens.font.family.sansSerif,
      padding: tokens.space.xs,
    })}
  >
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      })}
    >
      <Link
        to="/"
        css={css({
          alignItems: 'center',
          borderRadius: tokens.border.radius.interactive,
          color: tokens.color.text.secondary,
          display: 'inline-flex',
          outline: 0,
          padding: tokens.space.xxxs,
          textDecoration: 'none',
          ':focus': {
            boxShadow: tokens.shadow.focus,
          },
        })}
      >
        <div>
          <LogoBMV />
        </div>
        <div>
          <div
            css={css({
              color: tokens.color.text.onDark.secondary,
              fontSize: tokens.font.size.lg,
              lineHeight: 1,
              paddingLeft: tokens.space.xs,
            })}
          >
            {siteTitle}
          </div>
        </div>
      </Link>
      <div
        css={css({
          display: 'flex',
        })}
      >
        <a
          href="https://github.com/Martskin/box-model-visualizer"
          target="_blank"
          rel="noopener noreferrer"
          css={css({
            borderRadius: tokens.border.radius.interactive,
            marginRight: tokens.space.xxs,
            outline: 'none',
            ':hover': {
              opacity: '.75',
            },
            ':focus': {
              boxShadow: tokens.shadow.focus,
            }
          })}
        >
          <LogoGH />
        </a>
        <a
          href="http://www.MartinHofmann.com"
          target="_blank"
          rel="noopener noreferrer"
          css={css({
            borderRadius: tokens.border.radius.interactive,
            marginRight: tokens.space.xxs,
            outline: 'none',
            ':hover': {
              opacity: '.75',
            },
            ':focus': {
              boxShadow: tokens.shadow.focus,
            }
          })}
        >
          <LogoMH />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubTitle: ``,
}

export default Header
