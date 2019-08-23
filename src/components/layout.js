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
              paddingBottom: '50px',
              '@media (min-width: 480px)': {
                paddingBottom: '200px',
              }
            },
            '.layout__hero': {
              color: tokens.color.text.default,
              fontFamily: tokens.font.family.sansSerif,
              lineHeight: 1.5,
              padding: tokens.space.lg,
              textAlign: 'center',
              '@media (min-width: 480px)': {
                fontSize: tokens.font.size.xxl,
                padding: tokens.space.xxl,
              }
            },
            '.layout__heading': {
              fontSize: tokens.font.size.xl,
              lineHeight: 1,
              margin: `0 0 ${tokens.space.md}px`,
              '@media (min-width: 480px)': {
                fontSize: tokens.font.size.xxl,
              },
            },
            '.layout__lead': {
              color: tokens.color.text.secondary,
              fontSize: tokens.font.size.md,
              lineHeight: 1.25,
              margin: `0 auto ${tokens.space.lg}px`,
              maxWidth: '500px',
              '@media (min-width: 480px)': {
                fontSize: tokens.font.size.lg,
                lineHeight: 1.5,
                marginBottom: tokens.space.xl,
              }
            },
            '.layout__grid': {
              padding: `0 ${tokens.space.lg}px`,
              textAlign: 'center',
              '@media (min-width: 480px)': {
                display: 'grid',
                gridGap: tokens.space.lg,
                gridTemplateColumns: '1fr 1fr 1fr',
              },
              div: {
                border: tokens.border.component,
                marginBottom: tokens.space.lg,
                padding: `${tokens.space.sm}px ${tokens.space.xxs}px ${tokens.space.lg}px`,
                '@media (min-width: 480px)': {
                  margin: 0,
                }
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
