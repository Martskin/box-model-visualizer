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
  `

  return (
    <div
      css={css({
        color: tokens.color.text.default,
        fontFamily: tokens.font.family.sansSerif,
        lineHeight: 1.5,
        '*': {
          boxSizing: 'border-box',
        },
        h2: {
          color: tokens.color.text.secondary,
          fontSize: tokens.font.size.sm,
          fontWeight: 'normal',
          lineHeight: 1.1,
          margin: `0 0 ${tokens.space.md}px`,
        },
        legend: {
          color: tokens.color.text.default,
          display: 'table',
          float: 'left',
          fontSize: tokens.font.size.sm,
          fontWeight: 'bold',
          margin: `0 0 ${tokens.space.xxs}px`,
          padding: 0,
          width: '100%',
          '+ *': {
              clear: 'both',
          },
        },
        label: {
          display: 'block',
          fontSize: tokens.font.size.xs,
          fontWeight: 'normal',
          lineHeight: 1.1,
          margin: `0 0 ${tokens.space.xxxs}px`,
        },
        'fieldset': {
          borderBottom: 0,
          borderLeft: 0,
          borderRight: 0,
          borderTop: tokens.border.component,
          margin: `0 -${tokens.space.md}px 0`,
          minWidth: 0,
          padding: `${tokens.space.xxs}px ${tokens.space.md}px ${tokens.space.xs}px`,
          '&:last-of-type': {
            borderBottom: tokens.border.component,
            marginBottom: tokens.space.md,
          },
          ':hover': {
            background: tokens.color.text.interactive.focus,
          },
        },
        input: {
          border: tokens.border.input,
          color: tokens.color.text.default,
          display: 'block',
          fontSize: tokens.font.size.xs,
          padding: `${tokens.space.xxxs}px ${tokens.space.xxs}px`,
          width: 76,
          '&[type="color"]': {
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            height: 26,
            padding: 0,
            margin: '0 0 0 -2px',
            verticalAlign: 'middle',
            width: 22,
          }
        },
        '.control-panel': {
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: tokens.space.xs,
          'input': {
            width: '60px',
          }
        },
        '.control-panel__cell': {
          textAlign: 'center',
          '&:first-of-type': {
            order: 0,
            width: '100%',
          },
          '&:nth-of-type(2)': {
            order: 3,
            width: '30%',
          },
          '&:nth-of-type(3)': {
            order: 2,
            padding: `${tokens.space.xs}px ${tokens.space.sm}px`,
            width: '40%',
          },
          '&:nth-of-type(4)': {
            order: 4,
            width: '100%',
          },
          '&:last-of-type': {
            order: 1,
            width: '30%',
          },
          '.input-group': {
            display: 'inline-block',
            textAlign: 'left',
          }
        },
        '.control-panel__thumbnail': {
          border: `6px solid ${tokens.border.color.default}`,
          height: '28px',
          width: '100%',
        },
        '.color-picker-grid': {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridColumnGap: tokens.space.xs,
        },
        '.color-picker-input-grid': {
          alignItems: 'center',
          display: 'grid',
          gridTemplateColumns: '22px 1fr',
          position: 'relative',
          'input[type="color"]': {
            position: 'absolute',
            top: '-4px',
          }
        }
      })}
    >
      <div
        css={css({
          display: 'grid',
          gridTemplateColumns: '250px 1fr 250px',
          height: 'calc(100vh - 48px)',
          position: 'fixed',
          width: '100vw',
          '> div': {
            overflow: 'auto',
            padding: tokens.space.md,
            position: 'relative',
            '&:first-of-type': {
              background: tokens.color.background.light,
              borderRight: tokens.border.component,
            },
            '&:last-of-type': {
              background: tokens.color.background.light,
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
              <div
                className="control-panel"
              >
                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Top</label>
                    <input
                      defaultValue={marginTop}
                      type="number"
                      onChange={(e) => setMarginTop(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Right</label>
                    <input
                      defaultValue={marginRight}
                      type="number"
                      onChange={(e) => setMarginRight(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div
                    className="control-panel__thumbnail"
                    style={{
                      borderColor: marginBackgroundColor,
                    }}
                  />
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Bottom</label>
                    <input
                      defaultValue={marginBottom}
                      type="number"
                      onChange={(e) => setMarginBottom(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Left</label>
                    <input
                      defaultValue={marginLeft}
                      type="number"
                      onChange={(e) => setMarginLeft(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="color-picker-grid">
                <div>
                  <label>Background</label>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={marginBackgroundColor}
                        type="color"
                        onChange={(e) => setMarginBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>

                    <div>
                      <input
                        value={marginBackgroundColor}
                        type="text"
                        onChange={(e) => setMarginBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label>Label</label>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={marginLabelColor}
                        type="color"
                        onChange={(e) => setMarginLabelColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>

                    <div>
                      <input
                        value={marginLabelColor}
                        type="text"
                        onChange={(e) => setMarginBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Border</legend>
              <div
                className="control-panel"
              >
                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Top</label>
                    <input
                      defaultValue={borderTopWidth}
                      type="number"
                      onChange={(e) => setBorderTopWidth(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Right</label>
                    <input
                      defaultValue={borderRightWidth}
                      type="number"
                      onChange={(e) => setBorderRightWidth(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div
                    className="control-panel__thumbnail"
                    style={{
                      borderColor: borderBackgroundColor,
                    }}
                  />
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Bottom</label>
                    <input
                      defaultValue={borderBottomWidth}
                      type="number"
                      onChange={(e) => setBorderBottomWidth(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Left</label>
                    <input
                      defaultValue={borderLeftWidth}
                      type="number"
                      onChange={(e) => setBorderLeftWidth(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="color-picker-grid">
                <div>
                  <label>Background</label>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={borderBackgroundColor}
                        type="color"
                        onChange={(e) => setBorderBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>

                    <div>
                      <input
                        value={borderBackgroundColor}
                        type="text"
                        onChange={(e) => setBorderBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label>Label</label>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={borderLabelColor}
                        type="color"
                        onChange={(e) => setBorderLabelColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>

                    <div>
                      <input
                        value={borderLabelColor}
                        type="text"
                        onChange={(e) => setBorderBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Padding</legend>
              <div
                className="control-panel"
              >
                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Top</label>
                    <input
                      defaultValue={paddingTop}
                      type="number"
                      onChange={(e) => setPaddingTop(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Right</label>
                    <input
                      defaultValue={paddingRight}
                      type="number"
                      onChange={(e) => setPaddingRight(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div
                    className="control-panel__thumbnail"
                    style={{
                      borderColor: paddingBackgroundColor,
                    }}
                  />
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Bottom</label>
                    <input
                      defaultValue={paddingBottom}
                      type="number"
                      onChange={(e) => setPaddingBottom(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Left</label>
                    <input
                      defaultValue={paddingLeft}
                      type="number"
                      onChange={(e) => setPaddingLeft(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="color-picker-grid">
                <div>
                  <label>Background</label>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={paddingBackgroundColor}
                        type="color"
                        onChange={(e) => setPaddingBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>

                    <div>
                      <input
                        value={paddingBackgroundColor}
                        type="text"
                        onChange={(e) => setPaddingBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label>Label</label>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={paddingLabelColor}
                        type="color"
                        onChange={(e) => setPaddingLabelColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>

                    <div>
                      <input
                        value={paddingLabelColor}
                        type="text"
                        onChange={(e) => setPaddingBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Element Size</legend>
              <div
                className="control-panel"
              >
                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Width</label>
                    <input
                      defaultValue={width}
                      type="number"
                      onChange={(e) => setWidth(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  
                </div>

                <div className="control-panel__cell">
                  <div
                    className="control-panel__thumbnail"
                    style={{
                      background: elementBackgroundColor,
                      border: 'none',
                    }}
                  />
                </div>

                <div className="control-panel__cell">
                  
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Height</label>
                    <input
                      defaultValue={height}
                      type="number"
                      onChange={(e) => setHeight(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="color-picker-grid">
                <div>
                  <label>Background</label>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={elementBackgroundColor}
                        type="color"
                        onChange={(e) => setElementBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>

                    <div>
                      <input
                        value={elementBackgroundColor}
                        type="text"
                        onChange={(e) => setElementBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label>Label</label>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={elementLabelColor}
                        type="color"
                        onChange={(e) => setElementLabelColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>

                    <div>
                      <input
                        value={elementLabelColor}
                        type="text"
                        onChange={(e) => setElementBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>

        <div>
          <h2>Result</h2>
          <div
            css={css({
              textAlign: 'center',
            })}
          >
            <div
              css={css({
                background: marginBackgroundColor,
                color: marginLabelColor,
                display: 'inline-flex',
                fontSize: 12,
                paddingTop: marginTop,
                paddingRight: marginRight,
                paddingBottom: marginBottom,
                paddingLeft: marginLeft,
                position: 'relative',
                div: {
                  transition: 'width .5s ease-out, height .5s ease-out',
                }
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
    backgroundColor: '#f8cca1',
    labelColor: tokens.color.text.default,
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  },
  border: {
    backgroundColor: '#fcdc9f',
    labelColor: tokens.color.text.default,
    top: 30,
    right: 30,
    bottom: 30,
    left: 30,
  },
  padding: {
    backgroundColor: '#c3cf8e',
    labelColor: tokens.color.text.default,
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  },
  element: {
    backgroundColor: '#8eb6c1',
    labelColor: tokens.color.text.default,
    width: 200,
    height: 200,
  },
}

export default BoxModelVisualizer
