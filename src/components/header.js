import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tokens from "../data/tokens"
import { css } from "@emotion/core"
import Logo from "./logo"

const Header = ({ siteTitle, siteSubTitle, siteHeading }) => (
  <header
    css={css({
      backgroundColor: tokens.color.background.black,
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
          color: tokens.color.text.secondary,
          display: 'inline-flex',
          textDecoration: 'none',
        })}
      >
        <div>
          <Logo />
        </div>
        <div>
          <div
            css={css({
              color: tokens.color.text.onDark.secondary,
              fontSize: tokens.font.size.lg,
              lineHeight: 1,
              paddingLeft: tokens.space.sm,
            })}
          >
            {siteTitle}
          </div>
        </div>
      </Link>
      <div
        css={css({
          fontWeight: 'bold',
          fontSize: tokens.font.size.lg,
        })}
      >
        {siteHeading}
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
