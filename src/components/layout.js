/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import tokens from "../data/tokens"
import { css } from "@emotion/core"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteSubTitle={data.site.siteMetadata.subtitle}
          siteHeading={data.site.siteMetadata.heading}
        />
        <div
          css={css({
            backgroundColor: tokens.color.background.default,
            color: tokens.color.text.default,
            fontFamily: tokens.font.family.sansSerif,
            padding: 0,
            margin: 0,
            main: {
              margin: `0 auto ${tokens.space.lg}px`,
              padding: `${tokens.space.lg}px ${tokens.space.md}px`,
              maxWidth: tokens.layout.breakpoint.xl,
              textAlign: 'center',
            },
            h1: {
              fontSize: tokens.font.size.xl,
              lineHeight: 1.1,
              margin: `0 auto ${tokens.space.lg}px`,
              maxWidth: '900px',
              "& + h2": {
                margin: `-${tokens.space.xl}px 0 ${tokens.space.xxl}px`,
              }
            },
            h2: {
              color: tokens.color.text.secondary,
              fontSize: tokens.font.size.lg,
              fontWeight: 'normal',
              lineHeight: 1.1,
              margin: `0 auto ${tokens.space.md}px`,
            },
            a: {
              border: `1px solid ${tokens.color.text.interactive.default}`,
              borderRadius: tokens.border.radius.default,
              color: tokens.color.text.interactive.default,
              display: 'inline-block',
              fontSize: tokens.font.size.lg,
              padding: tokens.space.xs,
              textDecoration: 'none',
              ':hover': {
                color: tokens.color.text.default,
                backgroundColor: tokens.color.text.interactive.default,
              }
            },
            '.grid': {
              display: 'flex',
              margin: `0 -${tokens.space.xs}px`,
              '> div': {
                padding: `0 ${tokens.space.xs}px`,
                width: `calc(50% - ${tokens.space.sm}px)`,
              } 
            },
            '.sticky': {
              position: 'sticky',
              top: tokens.space.xs,
            },
            nav: {
              display: 'flex',
              justifyContent: 'space-between',
            }
          })}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
