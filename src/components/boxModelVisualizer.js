import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import CodeSnippet from "./codeSnippet"
import tokens from "../data/tokens"
import Button from "./button"

function BoxModelVisualizer({ margin, border, padding, element }) {  
  let cssCodeTextarea = React.createRef()
  let cssCopiedNotification = React.createRef()
  let linkInput = React.createRef()
  let linkCopiedNotification = React.createRef()

  const [marginBackgroundColor, setMarginBackgroundColor] = useState(margin.backgroundColor)
  const [marginLabelColor, setMarginLabelColor] = useState(margin.labelColor)
  const [marginTop, setMarginTop] = useState(margin.top)
  const [marginRight, setMarginRight] = useState(margin.right)
  const [marginBottom, setMarginBottom] = useState(margin.bottom)
  const [marginLeft, setMarginLeft] = useState(margin.left)
  const [marginLabel, setMarginLabel] = useState(margin.label)
  const [marginLabelIsVisible, setMarginLabelIsVisible] = useState(true)
  const [marginUnitsIsVisible, setMarginUnitsIsVisible] = useState(true)
  const [marginIsHighlighted, setMarginIsHighlighted] = useState(false)

  const [borderBackgroundColor, setBorderBackgroundColor] = useState(border.backgroundColor)
  const [borderLabelColor, setBorderLabelColor] = useState(border.labelColor)
  const [borderTopWidth, setBorderTopWidth] = useState(border.top)
  const [borderRightWidth, setBorderRightWidth] = useState(border.right)
  const [borderBottomWidth, setBorderBottomWidth] = useState(border.bottom)
  const [borderLeftWidth, setBorderLeftWidth] = useState(border.left)
  const [borderLabel, setBorderLabel] = useState(border.label)
  const [borderLabelIsVisible, setBorderLabelIsVisible] = useState(true)
  const [borderUnitsIsVisible, setBorderUnitsIsVisible] = useState(true)
  const [borderIsHighlighted, setBorderIsHighlighted] = useState(false)

  const [paddingBackgroundColor, setPaddingBackgroundColor] = useState(padding.backgroundColor)
  const [paddingLabelColor, setPaddingLabelColor] = useState(padding.labelColor)
  const [paddingTop, setPaddingTop] = useState(padding.top)
  const [paddingRight, setPaddingRight] = useState(padding.right)
  const [paddingBottom, setPaddingBottom]= useState(padding.bottom)
  const [paddingLeft, setPaddingLeft] = useState(padding.left)
  const [paddingLabel, setPaddingLabel] = useState(padding.label)
  const [paddingLabelIsVisible, setPaddingLabelIsVisible] = useState(true)
  const [paddingUnitsIsVisible, setPaddingUnitsIsVisible] = useState(true)
  const [paddingIsHighlighted, setPaddingIsHighlighted] = useState(false)

  const [elementBackgroundColor, setElementBackgroundColor] = useState(element.backgroundColor)
  const [elementLabelColor, setElementLabelColor] = useState(element.labelColor)
  const [elementWidth, setElementWidth] = useState(element.width)
  const [elementHeight, setElementHeight] = useState(element.height)
  const [elementLabel, setElementLabel] = useState(element.label)
  const [elementLabelIsVisible, setElementLabelIsVisible] = useState(true)
  const [elementUnitsIsVisible, setElementUnitsIsVisible] = useState(true)
  const [elementIsHighlighted, setElementIsHighlighted] = useState(false)

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
  box-sizing: border-box;
  width: ${elementWidth}px;
  height: ${elementHeight}px;
  `

  useEffect(() => {
    parseQueryString()
  }, [])

  function parseQueryString() {
    //?mt=42&mr=132&mb=46&ml=4&mlb=custom%20m%20label&mbc=cccccc&mlbc=ff0005&mlbv={true}&muv=&bt=42&br=132&bb=46&bl=4&blb=custom%20b%20label&bbc=FFCCCC&blbc=010EFF&blbv=&buv={true}&pt=42&pr=132&pb=46&pl=4&plb=custom%20p%20label&pbc=009701&plbc=01ffff&plbv={true}&puv=&ew=820&eh=500&elb=custom%20e%20label&ebc=0A0F78&elbc=F0F07F&elbv=&euv={true}
    let urlParams = new URLSearchParams(window.location.search)
    let hookFunctions = {
      'mt': (val) => {setMarginTop(parseInt(val))},
      'mr': (val) => {setMarginRight(parseInt(val))},
      'mb': (val) => {setMarginBottom(parseInt(val))},
      'ml': (val) => {setMarginLeft(parseInt(val))},
      'mlb': (val) => {setMarginLabel(val)},
      'mbc': (val) => {setMarginBackgroundColor('#' + val)},
      'mlbc': (val) => {setMarginLabelColor('#' + val)},
      'mlbv': (val) => {setMarginLabelIsVisible(val)},
      'muv': (val) => {setMarginUnitsIsVisible(val)},
      
      'bt': (val) => {setBorderTopWidth(parseInt(val))},
      'br': (val) => {setBorderRightWidth(parseInt(val))},
      'bb': (val) => {setBorderBottomWidth(parseInt(val))},
      'bl': (val) => {setBorderLeftWidth(parseInt(val))},
      'blb': (val) => {setBorderLabel(val)},
      'bbc': (val) => {setBorderBackgroundColor('#' + val)},
      'blbc': (val) => {setBorderLabelColor('#' + val)},
      'blbv': (val) => {setBorderLabelIsVisible(val)},
      'buv': (val) => {setBorderUnitsIsVisible(val)},

      'pt': (val) => {setPaddingTop(parseInt(val))},
      'pr': (val) => {setPaddingRight(parseInt(val))},
      'pb': (val) => {setPaddingBottom(parseInt(val))},
      'pl': (val) => {setPaddingLeft(parseInt(val))},
      'plb': (val) => {setPaddingLabel(val)},
      'pbc': (val) => {setPaddingBackgroundColor('#' + val)},
      'plbc': (val) => {setPaddingLabelColor('#' + val)},
      'plbv': (val) => {setPaddingLabelIsVisible(val)},
      'puv': (val) => {setPaddingUnitsIsVisible(val)},

      'ew': (val) => {setElementWidth(parseInt(val))},
      'eh': (val) => {setElementHeight(parseInt(val))},
      'elb': (val) => {setElementLabel(val)},
      'ebc': (val) => {setElementBackgroundColor('#' + val)},
      'elbc': (val) => {setElementLabelColor('#' + val)},
      'elbv': (val) => {setElementLabelIsVisible(val)},
      'euv': (val) => {setElementUnitsIsVisible(val)},
    }
    for (let pair of urlParams.entries()) { 
      if (hookFunctions[pair[0]]) {
        hookFunctions[pair[0]](pair[1])
      }
    }
  }

  function triggerNotification(el) {
    el.setAttribute('style', 'display: inline-block')
    setTimeout(function(){
      el.setAttribute('style', 'display: none')
    }, 5000)
  }

  function resetProperties() {
    window.location = '/'
  }

  function copyLink() {
    linkInput.current.value = window.location.href
    linkInput.current.select()
    document.execCommand('copy')
    triggerNotification(linkCopiedNotification.current)
  }

  function copyCSS() {
    cssCodeTextarea.current.select()
    document.execCommand('copy')
    triggerNotification(cssCopiedNotification.current)
  }

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
          margin: `0 0 ${tokens.space.sm}px`,
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
          margin: `0 0 ${tokens.space.xxs}px`,
        },
        'fieldset': {
          borderBottom: 0,
          borderLeft: 0,
          borderRight: 0,
          borderTop: tokens.border.component,
          margin: `0 -${tokens.space.md}px 0`,
          minWidth: 0,
          padding: `${tokens.space.xs}px ${tokens.space.md}px ${tokens.space.xs}px`,
          '&:last-of-type': {
            borderBottom: tokens.border.component,
            marginBottom: tokens.space.md,
          },
          '&:not(:first-of-type):hover': {
            background: tokens.color.background.interactive.hover.default,
          },
        },
        'input:not([type="checkbox"])': {
          border: tokens.border.input,
          color: tokens.color.text.default,
          display: 'block',
          fontSize: tokens.font.size.xs,
          padding: `${tokens.space.xxxs}px ${tokens.space.xxs}px`,
          width: '100%',
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
        '.input-grid': {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridColumnGap: tokens.space.xs,
          '> div': {
            marginBottom: tokens.space.xs,
          }
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
        },
        '.notification': {
            color: tokens.color.text.secondary,
            display: 'none',
            fontSize: tokens.font.size.xs,
            paddingLeft: tokens.space.xxs,
        },
        '.accessibly-hidden': {
            clip: 'rect(1px, 1px, 1px, 1px)',
            overflow: 'hidden',
            position: 'absolute',
            height: '1px',
            width: '1px',
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
            padding: tokens.space.sm,
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
              <div
                css={css({
                  display: 'flex',
                })}
              >
                <div
                  css={css({
                    flexGrow: 1,
                  })}
                >
                  <Button label="Copy link" onClick={() => copyLink() } size="small" variant="primary" />
                  <span ref={linkCopiedNotification} className="notification">
                    Link copied to clipboard!
                  </span>
                  <input
                    ref={linkInput}
                    value=""
                    type="text"
                    readOnly
                    className="accessibly-hidden"
                  />
                </div>
                <div>
                  <Button label="Reset" onClick={() => resetProperties() } size="small" />
                </div>
              </div>
            </fieldset>
          
            <fieldset
              onMouseEnter={() => setMarginIsHighlighted(true)}
              onMouseLeave={() => setMarginIsHighlighted(false)}
            >
              <legend>Margin</legend>
              <div
                className="control-panel"
              >
                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Top</label>
                    <input
                      value={marginTop}
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
                      value={marginRight}
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
                      value={marginBottom}
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
                      value={marginLeft}
                      type="number"
                      onChange={(e) => setMarginLeft(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="input-grid">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setMarginLabelIsVisible(e.target.checked)}
                      checked={marginLabelIsVisible}
                    />
                    <span>Show label</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setMarginUnitsIsVisible(e.target.checked)}
                      checked={marginUnitsIsVisible}
                    />
                    <span>Show units</span>
                  </label>
                </div>

                <div>
                  <label>Label Color</label>
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

                <div>
                  <label>Background Color</label>
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
                  <div className="input-group">
                    <label>Label</label>
                    <input
                      value={marginLabel}
                      type="text"
                      onChange={(e) => setMarginLabel(e.target.value)}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset
              onMouseEnter={() => setBorderIsHighlighted(true)}
              onMouseLeave={() => setBorderIsHighlighted(false)}
            >
              <legend>Border</legend>
              <div
                className="control-panel"
              >
                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Top</label>
                    <input
                      value={borderTopWidth}
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
                      value={borderRightWidth}
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
                      value={borderBottomWidth}
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
                      value={borderLeftWidth}
                      type="number"
                      onChange={(e) => setBorderLeftWidth(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="input-grid">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setBorderLabelIsVisible(e.target.checked)}
                      checked={borderLabelIsVisible}
                    />
                    <span>Show label</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setBorderUnitsIsVisible(e.target.checked)}
                      checked={borderUnitsIsVisible}
                    />
                    <span>Show units</span>
                  </label>
                </div>

                <div>
                  <label>Label Color</label>
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

                <div>
                  <label>Background Color</label>
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
                  <div className="input-group">
                    <label>Label</label>
                    <input
                      value={borderLabel}
                      type="text"
                      onChange={(e) => setBorderLabel(e.target.value)}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset
              onMouseEnter={() => setPaddingIsHighlighted(true)}
              onMouseLeave={() => setPaddingIsHighlighted(false)}
            >
              <legend>Padding</legend>
              <div
                className="control-panel"
              >
                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Top</label>
                    <input
                      value={paddingTop}
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
                      value={paddingRight}
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
                      value={paddingBottom}
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
                      value={paddingLeft}
                      type="number"
                      onChange={(e) => setPaddingLeft(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="input-grid">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setPaddingLabelIsVisible(e.target.checked)}
                      checked={paddingLabelIsVisible}
                    />
                    <span>Show label</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setPaddingUnitsIsVisible(e.target.checked)}
                      checked={paddingUnitsIsVisible}
                    />
                    <span>Show units</span>
                  </label>
                </div>

                <div>
                  <label>Label Color</label>
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
                        value={marginLabelColor}
                        type="text"
                        onChange={(e) => setPaddingBackgroundColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label>Background Color</label>
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
                  <div className="input-group">
                    <label>Label</label>
                    <input
                      value={paddingLabel}
                      type="text"
                      onChange={(e) => setPaddingLabel(e.target.value)}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset
              onMouseEnter={() => setElementIsHighlighted(true)}
              onMouseLeave={() => setElementIsHighlighted(false)}
            >
              <legend>Element Size</legend>
              <div
                className="control-panel"
              >
                <div className="control-panel__cell">
                  <div className="input-group">
                    <label>Width</label>
                    <input
                      value={elementWidth}
                      type="number"
                      onChange={(e) => setElementWidth(parseInt(e.target.value))}
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
                      value={elementHeight}
                      type="number"
                      onChange={(e) => setElementHeight(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="input-grid">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setElementLabelIsVisible(e.target.checked)}
                      checked={elementLabelIsVisible}
                    />
                    <span>Show label</span>
                  </label>
                </div>

                <div>
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setElementUnitsIsVisible(e.target.checked)}
                      checked={elementUnitsIsVisible}
                    />
                    <span>Show units</span>
                  </label>
                </div>

                <div>
                  <label>Label Color</label>
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

                <div>
                  <label>Background Color</label>
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
                  <div className="input-group">
                    <label>Label</label>
                    <input
                      value={elementLabel}
                      type="text"
                      onChange={(e) => setElementLabel(e.target.value)}
                      onClick={(e) => e.target.select()}
                    />
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
                fontSize: tokens.font.size.xs,
                paddingTop: marginTop,
                paddingRight: marginRight,
                paddingBottom: marginBottom,
                paddingLeft: marginLeft,
                position: 'relative',
                div: {
                  transition: 'width .5s ease-out, height .5s ease-out',
                },
                '&::before': {
                  background: tokens.color.background.default,
                  content: '" "',
                  display: 'block',
                  left: 0,
                  opacity: (borderIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.6' : 0,
                  position: 'absolute',
                  height: '100%',
                  top: 0,
                  width: '100%',
                  zIndex: 1,
                }
              })}
            >
              {marginLabelIsVisible && (
                <div
                  css={css({
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    left: 0,
                    lineHeight: 1,
                    opacity: (borderIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                    padding: tokens.space.xxxs,
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    zIndex: 8,
                  })}
                >
                  {marginLabel}
                </div>
              )}
              {marginUnitsIsVisible && (
                <>
                  <div
                    css={css({
                      alignItems: 'center',
                      display: 'flex',
                      height: marginTop,
                      justifyContent: 'center',
                      left: 0,
                      opacity: (borderIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                      position: 'absolute',
                      top: 0,
                      width: '100%',
                      zIndex: 8,
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
                      opacity: (borderIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      width: marginRight,
                      zIndex: 8,
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
                      opacity: (borderIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      zIndex: 8,
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
                      opacity: (borderIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                      position: 'absolute',
                      top: 0,
                      width: marginLeft,
                      zIndex: 8,
                    })}
                  >
                    {marginLeft.toLocaleString()}
                  </div>
                </>
              )}
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
                  zIndex: 2,
                  '&::before': {
                    background: tokens.color.background.default,
                    content: '" "',
                    display: 'block',
                    left: 0,
                    opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.6' : 0,
                    position: 'absolute',
                    height: '100%',
                    top: 0,
                    width: '100%',
                    zIndex: 3,
                  }
                })}
              >
                {borderLabelIsVisible && (
                  <div
                    css={css({
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      left: 0,
                      lineHeight: 1,
                      opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                      padding: tokens.space.xxxs,
                      position: 'absolute',
                      top: 0,
                      width: '100%',
                      zIndex: 8,
                    })}
                  >
                    {borderLabel}
                  </div>
                )}
                {borderUnitsIsVisible && (
                  <>
                    <div
                      css={css({
                        alignItems: 'center',
                        display: 'flex',
                        height: borderTopWidth,
                        justifyContent: 'center',
                        left: 0,
                        opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        zIndex: 8,
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
                        opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: borderRightWidth,
                        zIndex: 8,
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
                        opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        zIndex: 8,
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
                        opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                        position: 'absolute',
                        top: 0,
                        width: borderLeftWidth,
                        zIndex: 8,
                      })}
                    >
                      {borderLeftWidth.toLocaleString()}
                    </div>
                  </>
                )}
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
                    zIndex: 4,
                    '&::before': {
                      background: tokens.color.background.default,
                      content: '" "',
                      display: 'block',
                      left: 0,
                      opacity: (marginIsHighlighted || borderIsHighlighted || elementIsHighlighted) ? '.6' : 0,
                      position: 'absolute',
                      height: '100%',
                      top: 0,
                      width: '100%',
                      zIndex: 5,
                    }
                  })}
                >
                  {paddingLabelIsVisible && (
                    <div
                      css={css({
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        left: 0,
                        lineHeight: 1,
                        opacity: (marginIsHighlighted || borderIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                        padding: tokens.space.xxxs,
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        zIndex: 8,
                      })}
                    >
                      {paddingLabel}
                    </div>
                  )}
                  {paddingUnitsIsVisible && (
                    <>
                      <div
                        css={css({
                          alignItems: 'center',
                          display: 'flex',
                          height: paddingTop,
                          justifyContent: 'center',
                          left: 0,
                          opacity: (marginIsHighlighted || borderIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                          zIndex: 8,
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
                          opacity: (marginIsHighlighted || borderIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                          position: 'absolute',
                          right: 0,
                          top: 0,
                          width: paddingRight,
                          zIndex: 8,
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
                          opacity: (marginIsHighlighted || borderIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                          position: 'absolute',
                          bottom: 0,
                          width: '100%',
                          zIndex: 8,
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
                          opacity: (marginIsHighlighted || borderIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                          position: 'absolute',
                          top: 0,
                          width: paddingLeft,
                          zIndex: 8,
                        })}
                      >
                        {paddingLeft.toLocaleString()}
                      </div>
                    </>
                  )}
                  <div
                    css={css({
                      background: elementBackgroundColor,
                      color: elementLabelColor,
                      height: elementHeight - (borderTopWidth + borderBottomWidth) - (paddingTop + paddingBottom),
                      position: 'relative',
                      width: elementWidth - (borderRightWidth + borderLeftWidth) - (paddingRight + paddingLeft),
                      zIndex: 6,
                      '&::before': {
                        background: tokens.color.background.default,
                        content: '" "',
                        display: 'block',
                        left: 0,
                        opacity: (marginIsHighlighted || borderIsHighlighted || paddingIsHighlighted) ? '.6' : 0,
                        position: 'absolute',
                        height: '100%',
                        top: 0,
                        width: '100%',
                        zIndex: 7,
                      }
                    })}
                  >
                    {elementLabelIsVisible && (
                      <div
                        css={css({
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'flex-start',
                          left: 0,
                          lineHeight: 1,
                          opacity: (marginIsHighlighted || borderIsHighlighted || paddingIsHighlighted) ? '.25' : 1,
                          padding: tokens.space.xxxs,
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                          zIndex: 8,
                        })}
                      >
                        {elementLabel}
                      </div>
                    )}
                    {elementUnitsIsVisible && (
                      <div
                        css={css({
                          alignItems: 'center',
                          display: 'flex',
                          height: '100%',
                          justifyContent: 'center',
                          left: 0,
                          opacity: (marginIsHighlighted || borderIsHighlighted || paddingIsHighlighted) ? '.25' : 1,
                          position: 'absolute',
                          top: 0,
                          width: '100%',
                          zIndex: 8,
                        })}
                      >
                        {elementWidth.toLocaleString()} x {elementHeight.toLocaleString()}
                      </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2>CSS</h2>
          <CodeSnippet code={styleBlock} language="css" />

          <Button label="Copy CSS" onClick={() => copyCSS() } size="small" />
          <span ref={cssCopiedNotification} className="notification">
            CSS copied to clipboard!
          </span>
          <textarea
            ref={cssCodeTextarea}
            value={styleBlock}
            readOnly
            className="accessibly-hidden"
          />
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
    top: 32,
    right: 32,
    bottom: 32,
    left: 32,
    label: 'margin',
  },
  border: {
    backgroundColor: '#fde1a0',
    labelColor: tokens.color.text.default,
    top: 8,
    right: 8,
    bottom: 8,
    left: 8,
    label: 'border',
  },
  padding: {
    backgroundColor: '#c4ddb9',
    labelColor: tokens.color.text.default,
    top: 16,
    right: 16,
    bottom: 16,
    left: 16,
    label: 'padding',
  },
  element: {
    backgroundColor: '#a1c6e7',
    labelColor: tokens.color.text.default,
    width: 200,
    height: 200,
    label: 'element',
  },
}

export default BoxModelVisualizer
