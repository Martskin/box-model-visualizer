import PropTypes from "prop-types"
import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer";
import defaultTheme from "prism-react-renderer/themes/github";
import tokens from "../data/tokens"
import { css } from "@emotion/core"

const CodeSnippet = ({ code, language }) => (
  <div
    css={css({
      fontSize: tokens.font.size.sm,
      lineHeight: 1.5,
      margin: `0 ${-tokens.space.xxs}px`,
      overflow: "hidden",
      textAlign: "left",
      pre: {
        margin: 0,
        overflow: 'auto',
        padding: 0,
      },
      '.plain': {
        '&:first-of-type, &:last-of-type': {
          fontSize: 5,
          lineHeight: 1,
        }
      },
      '.token-line': {
        '&:first-of-type, &:last-of-type': {
          lineHeight: .5,
        }
      }
    })}
  >
    <Highlight {...defaultProps} code={code} language={language} theme={defaultTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </div>
)

CodeSnippet.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string
}

CodeSnippet.defaultProps = {
  code: ``,
  language: ``
}

export default CodeSnippet
