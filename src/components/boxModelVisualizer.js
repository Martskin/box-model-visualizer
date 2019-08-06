import React, { useState } from "react"
import { css } from "@emotion/core"
import CodeSnippet from "./codeSnippet"

function BoxModelVisualizer() {
  const [borderTopWidth, setBorderTopWidth] = useState(30)
  const [borderRightWidth, setBorderRightWidth] = useState(30)
  const [borderBottomWidth, setBorderBottomWidth] = useState(30)
  const [borderLeftWidth, setBorderLeftWidth] = useState(30)
  const [height, setHeight] = useState(100)
  const [marginTop, setMarginTop] = useState(40)
  const [marginRight, setMarginRight] = useState(40)
  const [marginBottom, setMarginBottom] = useState(40)
  const [marginLeft, setMarginLeft] = useState(40)
  const [paddingTop, setPaddingTop] = useState(10)
  const [paddingRight, setPaddingRight] = useState(10)
  const [paddingBottom, setPaddingBottom]= useState(10)
  const [paddingLeft, setPaddingLeft] = useState(10)
  const [width, setWidth] = useState(400)
  const [marginBackgroundColor, setMarginBackgroundColor] = useState('#add8e6')
  const [marginLabelColor, setMarginLabelColor] = useState('#303030')
  const [borderBackgroundColor, setBorderBackgroundColor] = useState('#ff0000')
  const [borderLabelColor, setBorderLabelColor] = useState('#303030')
  const [paddingBackgroundColor, setPaddingBackgroundColor] = useState('#ffff00')
  const [paddingLabelColor, setPaddingLabelColor] = useState('#303030')
  const [elementBackgroundColor, setElementBackgroundColor] = useState('#ffc0cb')
  const [elementLabelColor, setElementLabelColor] = useState('#303030')
  const labelZindex = 999

  const styleBlock = `
    {
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
        display: 'flex',
        justifyContent: 'center',
        '*': {
          boxSizing: 'border-box',
        }
      })}
    >
      <div>

        <h2>Element</h2>

        <form>
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
              zIndex: labelZindex,
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
              zIndex: labelZindex,
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
              zIndex: labelZindex,
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
              zIndex: labelZindex,
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
                zIndex: labelZindex,
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
                zIndex: labelZindex,
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
                zIndex: labelZindex,
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
                zIndex: labelZindex,
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
                  zIndex: labelZindex,
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
                  zIndex: labelZindex,
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
                  zIndex: labelZindex,
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
                  zIndex: labelZindex,
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
                    zIndex: labelZindex,
                  })}
                >
                  {width.toLocaleString()} x {height.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>CSS</h3>
        <CodeSnippet code={styleBlock} language="css" />
      </div>
    </div>
  )
}

export default BoxModelVisualizer
