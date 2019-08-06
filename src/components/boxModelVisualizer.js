import PropTypes from "prop-types"
import React, { useState } from "react"
import { css } from "@emotion/core"
import CodeSnippet from "./codeSnippet"
import tokens from "../data/tokens"

function BoxModelVisualizer({ border, margin, padding, element }) {
  const [borderBackgroundColor, setBorderBackgroundColor] = useState(border.backgroundColor)
  const [borderLabelColor, setBorderLabelColor] = useState(border.labelColor)
  const [borderTopWidth, setBorderTopWidth] = useState(border.top)
  const [borderRightWidth, setBorderRightWidth] = useState(border.right)
  const [borderBottomWidth, setBorderBottomWidth] = useState(border.bottom)
  const [borderLeftWidth, setBorderLeftWidth] = useState(border.left)
  
  const [marginBackgroundColor, setMarginBackgroundColor] = useState(margin.backgroundColor)
  const [marginLabelColor, setMarginLabelColor] = useState(margin.labelColor)
  const [marginTop, setMarginTop] = useState(margin.top)
  const [marginRight, setMarginRight] = useState(margin.right)
  const [marginBottom, setMarginBottom] = useState(margin.bottom)
  const [marginLeft, setMarginLeft] = useState(margin.left)

  const [paddingBackgroundColor, setPaddingBackgroundColor] = useState(padding.backgroundColor)
  const [paddingLabelColor, setPaddingLabelColor] = useState(padding.labelColor)
  const [paddingTop, setPaddingTop] = useState(padding.top)
  const [paddingRight, setPaddingRight] = useState(padding.right)
  const [paddingBottom, setPaddingBottom]= useState(padding.bottom)
  const [paddingLeft, setPaddingLeft] = useState(padding.left)

  const [elementBackgroundColor, setElementBackgroundColor] = useState(element.backgroundColor)
  const [elementLabelColor, setElementLabelColor] = useState(element.labelColor)
  const [width, setWidth] = useState(element.width)
  const [height, setHeight] = useState(element.height)

  const styleBlock = `
    div {
      /* margin properties */
      margin-top: ${marginTop}px;
      margin-right: ${marginRight}px;
      margin-bottom: ${marginBottom}px;
      margin-left: ${marginLeft}px;

      /* border properties */
      border-color: ${borderBackgroundColor};
      border-style: solid;
      border-top-width: ${borderTopWidth}px;
      border-right-width: ${borderRightWidth}px;
      border-bottom-width: ${borderBottomWidth}px;
      border-left-width: ${borderLeftWidth}px;

      /* padding properties */
      padding-top: ${paddingTop}px;
      padding-right: ${paddingRight}px;
      padding-bottom: ${paddingBottom}px;
      padding-left: ${paddingLeft}px;

      /* element size properties */
      width: ${width}px;
      height: ${height}px;
    }
  `

  return (
    <div
      css={css({
        fontFamily: tokens.font.family.sansSerif,
        lineHeight: 1.5,
        '*': {
          boxSizing: 'border-box',
        },
        h2: {
          color: tokens.color.text.secondary,
          fontSize: tokens.font.size.md,
          fontWeight: 'normal',
          lineHeight: 1.1,
          margin: `0 auto ${tokens.space.md}px`,
        }
      })}
    >
      <div
        css={css({
          display: 'grid',
          gridTemplateColumns: '250px 1fr 250px',
          '> div': {
            padding: tokens.space.md,
            '&:first-of-type': {
              borderRight: tokens.border.component,
            },
            '&:last-of-type': {
              borderLeft: tokens.border.component,
            }
          }
        })}
      >
        <div>
          <h2>Properties</h2>
          <form>
            <fieldset>
              <legend>Margin</legend>
              <div>
                <label>Margin Background Color</label>
                <input
                  value={marginBackgroundColor}
                  type="color"
                  onChange={(e) => setMarginBackgroundColor(e.target.value)}
                  onClick={(e) => e.target.select()}
                />

                <input
                  value={marginBackgroundColor}
                  type="text"
                  onChange={(e) => setMarginBackgroundColor(e.target.value)}
                  onClick={(e) => e.target.select()}
                />
              </div>

              <div>
                <label>Margin Label Color</label>
                <input
                  value={marginLabelColor}
                  type="color"
                  onChange={(e) => setMarginLabelColor(e.target.value)}
                  onClick={(e) => e.target.select()}
                />

                <input
                  value={marginLabelColor}
                  type="text"
                  onChange={(e) => setMarginLabelColor(e.target.value)}
                  onClick={(e) => e.target.select()}
                />
              </div>

              <div>
                <label>Margin Top</label>
                <input
                  defaultValue={marginTop}
                  type="number"
                  onChange={(e) => setMarginTop(parseInt(e.target.value))}
                  onClick={(e) => e.target.select()}
                />
              </div>

              <div>
                <label>Margin Right</label>
                <input
                  defaultValue={marginRight}
                  type="number"
                  onChange={(e) => setMarginRight(parseInt(e.target.value))}
                  onClick={(e) => e.target.select()}
                />
              </div>

              <div>
                <label>Margin Bottom</label>
                <input
                  defaultValue={marginBottom}
                  type="number"
                  onChange={(e) => setMarginBottom(parseInt(e.target.value))}
                  onClick={(e) => e.target.select()}
                />
              </div>

              <div>
                <label>Margin Left</label>
                <input
                  defaultValue={marginLeft}
                  type="number"
                  onChange={(e) => setMarginLeft(parseInt(e.target.value))}
                  onClick={(e) => e.target.select()}
                />
              </div>
            </fieldset>

            <div>
              <label>Border Background Color</label>
              <input
                value={borderBackgroundColor}
                type="color"
                onChange={(e) => setBorderBackgroundColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />

              <input
                value={borderBackgroundColor}
                type="text"
                onChange={(e) => setBorderBackgroundColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Border Label Color</label>
              <input
                value={borderLabelColor}
                type="color"
                onChange={(e) => setBorderLabelColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />

              <input
                value={borderLabelColor}
                type="text"
                onChange={(e) => setBorderLabelColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Border Top Width</label>
              <input
                defaultValue={borderTopWidth}
                type="number"
                onChange={(e) => setBorderTopWidth(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Border Right Width</label>
              <input
                defaultValue={borderRightWidth}
                type="number"
                onChange={(e) => setBorderRightWidth(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Border Bottom Width</label>
              <input
                defaultValue={borderBottomWidth}
                type="number"
                onChange={(e) => setBorderBottomWidth(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Border Left Width</label>
              <input
                defaultValue={borderLeftWidth}
                type="number"
                onChange={(e) => setBorderLeftWidth(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Padding Background Color</label>
              <input
                value={paddingBackgroundColor}
                type="color"
                onChange={(e) => setPaddingBackgroundColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />

              <input
                value={paddingBackgroundColor}
                type="text"
                onChange={(e) => setPaddingBackgroundColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Padding Label Color</label>
              <input
                value={paddingLabelColor}
                type="color"
                onChange={(e) => setPaddingLabelColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />

              <input
                value={paddingLabelColor}
                type="text"
                onChange={(e) => setPaddingLabelColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Padding Top</label>
              <input
                defaultValue={paddingTop}
                type="number"
                onChange={(e) => setPaddingTop(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Padding Right</label>
              <input
                defaultValue={paddingRight}
                type="number"
                onChange={(e) => setPaddingRight(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Padding Bottom</label>
              <input
                defaultValue={paddingBottom}
                type="number"
                onChange={(e) => setPaddingBottom(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Padding Left</label>
              <input
                defaultValue={paddingLeft}
                type="number"
                onChange={(e) => setPaddingLeft(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Element Background Color</label>
              <input
                value={elementBackgroundColor}
                type="color"
                onChange={(e) => setElementBackgroundColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />

              <input
                value={elementBackgroundColor}
                type="text"
                onChange={(e) => setElementBackgroundColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Element Label Color</label>
              <input
                value={elementLabelColor}
                type="color"
                onChange={(e) => setElementLabelColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />

              <input
                value={elementLabelColor}
                type="text"
                onChange={(e) => setElementLabelColor(e.target.value)}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Width</label>
              <input
                defaultValue={width}
                type="number"
                onChange={(e) => setWidth(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>

            <div>
              <label>Height</label>
              <input
                defaultValue={height}
                type="number"
                onChange={(e) => setHeight(parseInt(e.target.value))}
                onClick={(e) => e.target.select()}
              />
            </div>
          </form>
        </div>

        <div>
          <h2>Result</h2>
          <div
            css={css({
              background: marginBackgroundColor,
              color: marginLabelColor,
              display: 'inline-flex',
              fontSize: 12,
              margin: '0 auto',
              paddingTop: marginTop,
              paddingRight: marginRight,
              paddingBottom: marginBottom,
              paddingLeft: marginLeft,
              position: 'relative',
            })}
          >
            <div
              css={css({
                alignItems: 'center',
                display: 'flex',
                height: marginTop,
                justifyContent: 'center',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: 1,
              })}
            >
              {marginTop.toLocaleString()}
            </div>
            <div
              css={css({
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                position: 'absolute',
                right: 0,
                top: 0,
                width: marginRight,
                zIndex: 1,
              })}
            >
              {marginRight.toLocaleString()}
            </div>
            <div
              css={css({
                alignItems: 'center',
                display: 'flex',
                height: marginBottom,
                justifyContent: 'center',
                left: 0,
                position: 'absolute',
                bottom: 0,
                width: '100%',
                zIndex: 1,
              })}
            >
              {marginBottom.toLocaleString()}
            </div>
            <div
              css={css({
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                left: 0,
                position: 'absolute',
                top: 0,
                width: marginLeft,
                zIndex: 1,
              })}
            >
              {marginLeft.toLocaleString()}
            </div>
            <div
              css={css({
                background: borderBackgroundColor,
                color: borderLabelColor,
                display: 'inline-flex',
                paddingTop: borderTopWidth,
                paddingRight: borderRightWidth,
                paddingBottom: borderBottomWidth,
                paddingLeft: borderLeftWidth,
                position: 'relative',
              })}
            >
              <div
                css={css({
                  alignItems: 'center',
                  display: 'flex',
                  height: borderTopWidth,
                  justifyContent: 'center',
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  zIndex: 1,
                })}
              >
                {borderTopWidth.toLocaleString()}
              </div>
              <div
                css={css({
                  alignItems: 'center',
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'center',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  width: borderRightWidth,
                  zIndex: 1,
                })}
              >
                {borderRightWidth.toLocaleString()}
              </div>
              <div
                css={css({
                  alignItems: 'center',
                  display: 'flex',
                  height: borderBottomWidth,
                  justifyContent: 'center',
                  left: 0,
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  zIndex: 1,
                })}
              >
                {borderBottomWidth.toLocaleString()}
              </div>
              <div
                css={css({
                  alignItems: 'center',
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'center',
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: borderLeftWidth,
                  zIndex: 1,
                })}
              >
                {borderLeftWidth.toLocaleString()}
              </div>
              <div
                css={css({
                  alignItems: 'center',
                  background: paddingBackgroundColor,
                  color: paddingLabelColor,
                  display: 'inline-flex',
                  justifyContent: 'center',
                  paddingTop,
                  paddingRight,
                  paddingBottom,
                  paddingLeft,
                  position: 'relative',
                })}
              >
                <div
                  css={css({
                    alignItems: 'center',
                    display: 'flex',
                    height: paddingTop,
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    zIndex: 1,
                  })}
                >
                  {paddingTop.toLocaleString()}
                </div>
                <div
                  css={css({
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: paddingRight,
                    zIndex: 1,
                  })}
                >
                  {paddingRight.toLocaleString()}
                </div>
                <div
                  css={css({
                    alignItems: 'center',
                    display: 'flex',
                    height: paddingBottom,
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    zIndex: 1,
                  })}
                >
                  {paddingBottom.toLocaleString()}
                </div>
                <div
                  css={css({
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: paddingLeft,
                    zIndex: 1,
                  })}
                >
                  {paddingLeft.toLocaleString()}
                </div>
                <div
                  css={css({
                    background: elementBackgroundColor,
                    color: elementLabelColor,
                    height: height - (paddingTop + paddingBottom),
                    position: 'relative',
                    width: width - (paddingRight + paddingLeft),
                  })}
                >
                  <div
                    css={css({
                      alignItems: 'center',
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'center',
                      left: 0,
                      position: 'absolute',
                      top: 0,
                      width: '100%',
                      zIndex: 1,
                    })}
                  >
                    {width.toLocaleString()} x {height.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>CSS</h2>
          <CodeSnippet code={styleBlock} language="css" />
        </div>
      </div>
    </div>
  )
}

BoxModelVisualizer.propTypes = {
  margin: PropTypes.object,
  border: PropTypes.object,
  padding: PropTypes.object,
  element: PropTypes.object,
}

BoxModelVisualizer.defaultProps = {
  margin: {
    backgroundColor: '#add8e6',
    labelColor: tokens.color.text.default,
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  },
  border: {
    backgroundColor: '#ff0000',
    labelColor: tokens.color.text.default,
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  },
  padding: {
    backgroundColor: '#ffff00',
    labelColor: tokens.color.text.default,
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  },
  element: {
    backgroundColor: '#ffc0cb',
    labelColor: tokens.color.text.default,
    width: 400,
    height: 100,
  },
}

export default BoxModelVisualizer
