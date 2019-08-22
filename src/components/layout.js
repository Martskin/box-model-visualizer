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
import { css } from "@emotion/core"
import tokens from "../data/tokens"

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
        />
        <div
          css={css({
            '.layout-container': {
              margin: '0 auto',
              maxWidth: '1040px',
              paddingBottom: '200px',
            },
            '.layout__hero': {
              color: tokens.color.text.default,
              fontFamily: tokens.font.family.sansSerif,
              lineHeight: 1.5,
              padding: tokens.space.xxl,
              textAlign: 'center',
            },
            '.layout__heading': {
              fontSize: tokens.font.size.xxl,
              margin: `0 0 ${tokens.space.md}px`
            },
            '.layout__lead': {
              color: tokens.color.text.secondary,
              fontSize: tokens.font.size.lg,
              margin: `0 auto ${tokens.space.xl}px`,
              maxWidth: '500px',
            },
            '.layout__grid': {
              display: 'grid',
              gridGap: tokens.space.lg,
              gridTemplateColumns: '1fr 1fr 1fr',
              textAlign: 'center',
              div: {
                border: tokens.border.component,
                padding: `${tokens.space.sm}px ${tokens.space.xxs}px ${tokens.space.lg}px`,
              },
              img: {
                cursor: 'pointer',
                height: 'auto',
                maxWidth: '100%',
                ':hover': {
                  opacity: '.75',
                }
              }
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
