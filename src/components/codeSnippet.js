import PropTypes from "prop-types"
import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer";
import defaultTheme from "prism-react-renderer/themes/vsDark";
import tokens from "../data/tokens"
import { css } from "@emotion/core"

const CodeSnippet = ({ code, language }) => (
  <div
    css={css({
      border: tokens.border.component,
      borderRadius: tokens.border.radius.default,
      fontSize: tokens.font.size.md,
      marginBottom: tokens.space.lg,
      overflow: "hidden",
      textAlign: "left",
      pre: {
        margin: 0,
        overflow: 'auto',
        padding: tokens.space.sm,
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
