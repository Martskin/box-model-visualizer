import React, { useState } from "react"
import { css } from "@emotion/core"

function BoxModelVisualizer() {
  const [borderTopWidth, setBorderTopWidth] = useState(30)
  const [borderRightWidth, setBorderRightWidth] = useState(30)
  const [borderBottomWidth, setBorderBottomWidth] = useState(30)
  const [borderLeftWidth, setBorderLeftWidth] = useState(30)
  const [boxSizing, setBoxSizing] = useState("border-box")
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

  return (
    <div
      css={css({
        display: 'flex',
        justifyContent: 'center',
      })}
    >
      <div>

        <h2>Element</h2>

        <form>
        <div>
            <label>Box Sizing</label>
            <select
              onChange={(e) => setBoxSizing(e.target.value)}
            >
              <option value="border-box">Border-box</option>
              <option value="content-box">Content-box</option>
            </select>
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
            background: 'lightblue',
            display: 'inline-flex',
            paddingTop: marginTop,
            paddingRight: marginRight,
            paddingBottom: marginBottom,
            paddingLeft: marginLeft,
            position: 'relative',
          })}
        >
          <div
            css={css({
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
            })}
          >
            {marginTop.toLocaleString()}
          </div>
          <div
            css={css({
              alignItems: 'center',
              display: 'flex',
              height: '100%',
              position: 'absolute',
              right: 0,
              top: 0,
            })}
          >
            {marginRight.toLocaleString()}
          </div>
          <div
            css={css({
              left: 0,
              position: 'absolute',
              bottom: 0,
              width: '100%',
            })}
          >
            {marginBottom.toLocaleString()}
          </div>
          <div
            css={css({
              alignItems: 'center',
              display: 'flex',
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
            })}
          >
            {marginLeft.toLocaleString()}
          </div>
          <div
            css={css({
              background: 'red',
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
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
              })}
            >
              {borderTopWidth.toLocaleString()}
            </div>
            <div
              css={css({
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                position: 'absolute',
                right: 0,
                top: 0,
              })}
            >
              {borderRightWidth.toLocaleString()}
            </div>
            <div
              css={css({
                left: 0,
                position: 'absolute',
                bottom: 0,
                width: '100%',
              })}
            >
              {borderBottomWidth.toLocaleString()}
            </div>
            <div
              css={css({
                alignItems: 'center',
                display: 'flex',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
              })}
            >
              {borderLeftWidth.toLocaleString()}
            </div>
            <div
              css={css({
                alignItems: 'center',
                background: 'yellow',
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
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                })}
              >
                {paddingTop.toLocaleString()}
              </div>
              <div
                css={css({
                  alignItems: 'center',
                  display: 'flex',
                  height: '100%',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                })}
              >
                {paddingRight.toLocaleString()}
              </div>
              <div
                css={css({
                  left: 0,
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                })}
              >
                {paddingBottom.toLocaleString()}
              </div>
              <div
                css={css({
                  alignItems: 'center',
                  display: 'flex',
                  height: '100%',
                  left: 0,
                  position: 'absolute',
                  top: 0,
                })}
              >
                {paddingLeft.toLocaleString()}
              </div>
              <div
                css={css({
                  alignItems: 'center',
                  background: 'pink',
                  boxSizing,
                  display: 'inline-flex',
                  height: height - (paddingTop + paddingBottom),
                  justifyContent: 'center',
                  width: width - (paddingRight + paddingLeft),
                })}
              >
                {width.toLocaleString()} X {height.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* <div
          css={css({
            alignItems: 'center',
            background: 'pink',
            borderColor: 'red',
            borderStyle: 'solid',
            boxSizing,
            borderTopWidth,
            borderRightWidth,
            borderBottomWidth,
            borderLeftWidth,
            display: 'flex',
            height,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            justifyContent: 'center',
            width,
          })}
        >
          {width.toLocaleString()} X {height.toLocaleString()}
        </div> */}
      </div>
    </div>
  )
}

export default BoxModelVisualizer
