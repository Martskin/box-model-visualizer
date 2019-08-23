import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import CodeSnippet from "./codeSnippet"
import tokens from "../data/tokens"
import Button from "./button"
import CheckboxEye from "./checkboxEye"
import html2canvas from "html2canvas"

function BoxModelVisualizer({ margin, border, padding, element }) {  
  let cssCodeHiddenTextarea = React.createRef()
  let cssCopiedNotification = React.createRef()
  let linkHiddenInput = React.createRef()
  let linkCopiedNotification = React.createRef()

  let marginBackgroundColorInput = React.createRef()
  let borderBackgroundColorInput = React.createRef()
  let paddingBackgroundColorInput = React.createRef()
  let elementBackgroundColorInput = React.createRef()

  const [marginBackgroundColor, setMarginBackgroundColor] = useState(margin.backgroundColor)
  const [marginLabelColor, setMarginLabelColor] = useState(margin.labelColor)
  const [marginUnitColor, setMarginUnitColor] = useState(margin.unitColor)
  const [marginTop, setMarginTop] = useState(margin.top)
  const [marginRight, setMarginRight] = useState(margin.right)
  const [marginBottom, setMarginBottom] = useState(margin.bottom)
  const [marginLeft, setMarginLeft] = useState(margin.left)
  const [marginLabel, setMarginLabel] = useState(margin.label)
  const [marginLabelIsVisible, setMarginLabelIsVisible] = useState(true)
  const [marginLabelPosition, setMarginLabelPosition] = useState(margin.labelPosition)
  const [marginTopUnitIsVisible, setMarginTopUnitIsVisible] = useState(true)
  const [marginRightUnitIsVisible, setMarginRightUnitIsVisible] = useState(true)
  const [marginBottomUnitIsVisible, setMarginBottomUnitIsVisible] = useState(true)
  const [marginLeftUnitIsVisible, setMarginLeftUnitIsVisible] = useState(true)
  const [marginIsHighlighted, setMarginIsHighlighted] = useState(false)

  const [borderBackgroundColor, setBorderBackgroundColor] = useState(border.backgroundColor)
  const [borderLabelColor, setBorderLabelColor] = useState(border.labelColor)
  const [borderUnitColor, setBorderUnitColor] = useState(border.unitColor)
  const [borderTop, setBorderTop] = useState(border.top)
  const [borderRight, setBorderRight] = useState(border.right)
  const [borderBottom, setBorderBottom] = useState(border.bottom)
  const [borderLeft, setBorderLeft] = useState(border.left)
  const [borderLabel, setBorderLabel] = useState(border.label)
  const [borderLabelIsVisible, setBorderLabelIsVisible] = useState(true)
  const [borderLabelPosition, setBorderLabelPosition] = useState(border.labelPosition)
  const [borderTopUnitIsVisible, setBorderTopUnitIsVisible] = useState(true)
  const [borderRightUnitIsVisible, setBorderRightUnitIsVisible] = useState(true)
  const [borderBottomUnitIsVisible, setBorderBottomUnitIsVisible] = useState(true)
  const [borderLeftUnitIsVisible, setBorderLeftUnitIsVisible] = useState(true)
  const [borderIsHighlighted, setBorderIsHighlighted] = useState(false)

  const [paddingBackgroundColor, setPaddingBackgroundColor] = useState(padding.backgroundColor)
  const [paddingLabelColor, setPaddingLabelColor] = useState(padding.labelColor)
  const [paddingUnitColor, setPaddingUnitColor] = useState(padding.unitColor)
  const [paddingTop, setPaddingTop] = useState(padding.top)
  const [paddingRight, setPaddingRight] = useState(padding.right)
  const [paddingBottom, setPaddingBottom]= useState(padding.bottom)
  const [paddingLeft, setPaddingLeft] = useState(padding.left)
  const [paddingLabel, setPaddingLabel] = useState(padding.label)
  const [paddingLabelIsVisible, setPaddingLabelIsVisible] = useState(true)
  const [paddingLabelPosition, setPaddingLabelPosition] = useState(padding.labelPosition)
  const [paddingTopUnitIsVisible, setPaddingTopUnitIsVisible] = useState(true)
  const [paddingRightUnitIsVisible, setPaddingRightUnitIsVisible] = useState(true)
  const [paddingBottomUnitIsVisible, setPaddingBottomUnitIsVisible] = useState(true)
  const [paddingLeftUnitIsVisible, setPaddingLeftUnitIsVisible] = useState(true)
  const [paddingIsHighlighted, setPaddingIsHighlighted] = useState(false)

  const [elementBackgroundColor, setElementBackgroundColor] = useState(element.backgroundColor)
  const [elementLabelColor, setElementLabelColor] = useState(element.labelColor)
  const [elementUnitColor, setElementUnitColor] = useState(element.unitColor)
  const [elementWidth, setElementWidth] = useState(element.width)
  const [elementHeight, setElementHeight] = useState(element.height)
  const [elementLabel, setElementLabel] = useState(element.label)
  const [elementLabelIsVisible, setElementLabelIsVisible] = useState(true)
  const [elementLabelPosition, setElementLabelPosition] = useState(element.labelPosition)
  const [elementWidthUnitIsVisible, setElementWidthUnitIsVisible] = useState(true)
  const [elementHeightUnitIsVisible, setElementHeightUnitIsVisible] = useState(true)
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
  border-top-width: ${borderTop}px;
  border-right-width: ${borderRight}px;
  border-bottom-width: ${borderBottom}px;
  border-left-width: ${borderLeft}px;

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

  function savePNG() {
    const boxModel = document.getElementById("box-model")

    html2canvas(boxModel).then(function(canvas) {
      saveAs(canvas.toDataURL(), 'box-model.png');
    }) 
  }

  function saveAs(uri, filename) {
    let link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

  function truthyHelper(val) {
    let paramSafeVal
    if (val === 'true') {
      paramSafeVal = true
    } else {
      paramSafeVal = false
    }
    return paramSafeVal
  }

  const hooksMap = {
    mt: {
      var: marginTop,
      func: (val) => {setMarginTop(parseInt(val))},
    },
    mr: {
      var: marginRight,
      func: (val) => {setMarginRight(parseInt(val))},
    },
    mb: {
      var: marginBottom,
      func: (val) => {setMarginBottom(parseInt(val))}
    },
    ml: {
      var: marginLeft,
      func: (val) => {setMarginLeft(parseInt(val))}
    },
    mlb: {
      var: marginLabel,
      func: (val) => {setMarginLabel(val)}
    },
    mbc: {
      var: marginBackgroundColor,
      func: (val) => {setMarginBackgroundColor(val)}
    },
    mlbc: {
      var: marginLabelColor,
      func: (val) => {setMarginLabelColor(val)}
    },
    mlbv: {
      var: marginLabelIsVisible,
      func: (val) => {setMarginLabelIsVisible(truthyHelper(val))}
    },
    mlbp: {
      var: marginLabelPosition,
      func: (val) => {setMarginLabelPosition(val)}
    },
    muc: {
      var: marginUnitColor,
      func: (val) => {setMarginUnitColor(val)}
    },
    mtuv: {
      var: marginTopUnitIsVisible,
      func: (val) => {setMarginTopUnitIsVisible(truthyHelper(val))}
    },
    mruv: {
      var: marginRightUnitIsVisible,
      func: (val) => {setMarginRightUnitIsVisible(truthyHelper(val))}
    },
    mbuv: {
      var: marginBottomUnitIsVisible,
      func: (val) => {setMarginBottomUnitIsVisible(truthyHelper(val))}
    },
    mluv: {
      var: marginLeftUnitIsVisible,
      func: (val) => {setMarginLeftUnitIsVisible(truthyHelper(val))}
    },
    
    bt: {
      var: borderTop,
      func: (val) => {setBorderTop(parseInt(val))}
    },
    br: {
      var: borderRight,
      func: (val) => {setBorderRight(parseInt(val))}
    },
    bb: {
      var: borderBottom,
      func: (val) => {setBorderBottom(parseInt(val))}
    },
    bl: {
      var: borderLeft,
      func: (val) => {setBorderLeft(parseInt(val))}
    },
    blb: {
      var: borderLabel,
      func: (val) => {setBorderLabel(val)}
    },
    bbc: {
      var: borderBackgroundColor,
      func: (val) => {setBorderBackgroundColor(val)}
    },
    blbc: {
      var: borderLabelColor,
      func: (val) => {setBorderLabelColor(val)}
    },
    blbv: {
      var: borderLabelIsVisible,
      func: (val) => {setBorderLabelIsVisible(truthyHelper(val))}
    },
    blbp: {
      var: borderLabelPosition,
      func: (val) => {setBorderLabelPosition(val)}
    },
    buc: {
      var: borderUnitColor,
      func: (val) => {setBorderUnitColor(val)}
    },
    btuv: {
      var: borderTopUnitIsVisible,
      func: (val) => {setBorderTopUnitIsVisible(truthyHelper(val))}
    },
    bruv: {
      var: borderRightUnitIsVisible,
      func: (val) => {setBorderRightUnitIsVisible(truthyHelper(val))}
    },
    bbuv: {
      var: borderBottomUnitIsVisible,
      func: (val) => {setBorderBottomUnitIsVisible(truthyHelper(val))}
    },
    bluv: {
      var: borderLeftUnitIsVisible,
      func: (val) => {setBorderLeftUnitIsVisible(truthyHelper(val))}
    },

    pt: {
      var: paddingTop,
      func: (val) => {setPaddingTop(parseInt(val))}
    },
    pr: {
      var: paddingRight,
      func: (val) => {setPaddingRight(parseInt(val))}
    },
    pb: {
      var: paddingBottom,
      func: (val) => {setPaddingBottom(parseInt(val))}
    },
    pl: {
      var: paddingLeft,
      func: (val) => {setPaddingLeft(parseInt(val))}
    },
    plb: {
      var: paddingLabel,
      func: (val) => {setPaddingLabel(val)}
    },
    pbc: {
      var: paddingBackgroundColor,
      func: (val) => {setPaddingBackgroundColor(val)}
    },
    plbc: {
      var: paddingLabelColor,
      func: (val) => {setPaddingLabelColor(val)}
    },
    plbv: {
      var: paddingLabelIsVisible,
      func: (val) => {setPaddingLabelIsVisible(truthyHelper(val))}
    },
    plbp: {
      var: paddingLabelPosition,
      func: (val) => {setPaddingLabelPosition(val)}
    },
    puc: {
      var: paddingUnitColor,
      func: (val) => {setPaddingUnitColor(val)}
    },
    ptuv: {
      var: paddingTopUnitIsVisible,
      func: (val) => {setPaddingTopUnitIsVisible(truthyHelper(val))}
    },
    pruv: {
      var: paddingRightUnitIsVisible,
      func: (val) => {setPaddingRightUnitIsVisible(truthyHelper(val))}
    },
    pbuv: {
      var: paddingBottomUnitIsVisible,
      func: (val) => {setPaddingBottomUnitIsVisible(truthyHelper(val))}
    },
    pluv: {
      var: paddingLeftUnitIsVisible,
      func: (val) => {setPaddingLeftUnitIsVisible(truthyHelper(val))}
    },

    ew: {
      var: elementWidth,
      func: (val) => {setElementWidth(parseInt(val))}
    },
    eh: {
      var: elementHeight,
      func: (val) => {setElementHeight(parseInt(val))}
    },
    elb: {
      var: elementLabel,
      func: (val) => {setElementLabel(val)}
    },
    ebc: {
      var: elementBackgroundColor,
      func: (val) => {setElementBackgroundColor(val)}
    },
    elbc: {
      var: elementLabelColor,
      func: (val) => {setElementLabelColor(val)}
    },
    elbv: {
      var: elementLabelIsVisible,
      func: (val) => {setElementLabelIsVisible(truthyHelper(val))}
    },
    elbp: {
      var: elementLabelPosition,
      func: (val) => {setElementLabelPosition(val)}
    },
    euc: {
      var: elementUnitColor,
      func: (val) => {setElementUnitColor(val)}
    },
    ewuv: {
      var: elementWidthUnitIsVisible,
      func: (val) => {setElementWidthUnitIsVisible(truthyHelper(val))}
    },
    ehuv: {
      var: elementHeightUnitIsVisible,
      func: (val) => {setElementHeightUnitIsVisible(truthyHelper(val))}
    },
  }

  function parseQueryString() {
    //?mt=10&mr=10&mb=10&ml=10&mlb=custom+margin+label&mbc=%23ff7c00&mlbc=%23009701&mlbv=true&mlbp=olm&muc=%23ff0005&mtuv=true&mruv=true&mbuv=true&mluv=true&bt=15&br=15&bb=15&bl=15&blb=custom+border+label&bbc=%23fde1ff&blbc=%23fa84b3&blbv=true&blbp=otc&buc=%2330c9bf&btuv=true&bruv=true&bbuv=true&bluv=true&pt=20&pr=20&pb=20&pl=20&plb=custom+padding+label&pbc=%23c40700&plbc=%23ffd730&plbv=true&plbp=orm&puc=%2330ffff&ptuv=true&pruv=true&pbuv=true&pluv=true&ew=250&eh=300&elb=custom+element+label&ebc=%23ff7c00&elbc=%23ff00ff&elbv=true&elbp=obc&euc=%23010eff&ewuv=true&ehuv=true
    //?mt=0&mr=0&mb=32&ml=0&mlb=margin&mbc=%23f8cca1&mlbc=%23303030&mlbv=true&mlbp=ibl&muc=%23303030&mtuv=false&mruv=false&mbuv=true&mluv=false&bt=1&br=1&bb=1&bl=1&blb=border&bbc=%23ff0005&blbc=%23303030&blbv=false&blbp=olt&buc=%23303030&btuv=false&bruv=false&bbuv=false&bluv=false&pt=8&pr=16&pb=8&pl=16&plb=padding&pbc=%23c4ddb9&plbc=%23303030&plbv=true&plbp=olt&puc=%23303030&ptuv=true&pruv=true&pbuv=true&pluv=true&ew=150&eh=50&elb=button&ebc=%23a1c6e7&elbc=%23303030&elbv=true&elbp=imc&euc=%23303030&ewuv=false&ehuv=false
    let urlParams = new URLSearchParams(window.location.search)
    for (let pair of urlParams.entries()) { 
      if (hooksMap[pair[0]].func) {
        hooksMap[pair[0]].func(pair[1])
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
    window.location = '/model'
  }

  function copyLink() {
    let pageRoot = [window.location.protocol, '//', window.location.host, window.location.pathname].join('')
    let queryString = new URLSearchParams()
    let keys = Object.keys(hooksMap)
    for (let i = 0; i < keys.length; i++) {
      queryString.append(keys[i], hooksMap[keys[i]].var)
    }
    let compiledLink = pageRoot + '?' + queryString
    linkHiddenInput.current.value = compiledLink
    linkHiddenInput.current.select()
    document.execCommand('copy')
    triggerNotification(linkCopiedNotification.current)
  }

  function copyCSS() {
    cssCodeHiddenTextarea.current.select()
    document.execCommand('copy')
    triggerNotification(cssCopiedNotification.current)
  }

  function labelPositionSelectOptions(label) {
    let elementSpecificOption
    if (label === 'element') {
      elementSpecificOption = <option value="imc">Inside middle center</option>
    }
    return (
      <>
        <option value="itl">Inside top left</option>
        <option value="itc">Inside top center</option>
        <option value="itr">Inside top right</option>
        <option value="ibr">Inside bottom right</option>
        <option value="ibc">Inside bottom center</option>
        <option value="ibl">Inside bottom left</option>
        {elementSpecificOption}
        <option value="otl">Outside top left</option>
        <option value="otc">Outside top center</option>
        <option value="otr">Outside top right</option>
        <option value="ort">Outside right top</option>
        <option value="orm">Outside right middle</option>
        <option value="orb">Outside right bottom</option>
        <option value="obr">Outside bottom right</option>
        <option value="obc">Outside bottom center</option>
        <option value="obl">Outside bottom left</option>
        <option value="olb">Outside left bottom</option>
        <option value="olm">Outside left middle</option>
        <option value="olt">Outside left top</option>
      </>
    )
  }

  function getLabelStyles(label) {
    let labelPosition
    let labelOffset = {}
    let labelColor
    let isDimmed
    let positionProperties = {}

    switch (label) {
      case ('margin'):
        labelPosition = marginLabelPosition
        labelColor = marginLabelColor
        isDimmed = borderIsHighlighted || paddingIsHighlighted || elementIsHighlighted
        labelOffset = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }
        break
      case ('border'):
        labelPosition = borderLabelPosition
        labelColor = borderLabelColor
        isDimmed = marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted
        labelOffset = {
          top: marginTop,
          right: marginRight,
          bottom: marginBottom,
          left: marginLeft,
        }
        break
      case ('padding'):
        labelPosition = paddingLabelPosition
        labelColor = paddingLabelColor
        isDimmed = marginIsHighlighted || borderIsHighlighted || elementIsHighlighted
        labelOffset = {
          top: marginTop + borderTop,
          right: marginRight + borderRight,
          bottom: marginBottom + borderBottom,
          left: marginLeft + borderLeft,
        }
        break
      case ('element'):
        labelPosition = elementLabelPosition
        labelColor = elementLabelColor
        isDimmed = marginIsHighlighted || borderIsHighlighted || paddingIsHighlighted
        labelOffset = {
          top: marginTop + borderTop + paddingTop,
          right: marginRight + borderRight + paddingRight,
          bottom: marginBottom + borderBottom + paddingBottom,
          left: marginLeft + borderLeft + paddingLeft,
        }
        break
      default:
        labelOffset = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }
    }

    switch (labelPosition) {
      case ('itl'):
        positionProperties = {
          justifyContent: 'flex-start',
          left: 0,
          top: 0,
          width: '100%',
        }
        break
      case ('itc'):
        positionProperties = {
          justifyContent: 'center',
          left: 0,
          top: 0,
          width: '100%',
        }
        break
      case ('itr'):
        positionProperties = {
          justifyContent: 'flex-end',
          left: 0,
          top: 0,
          width: '100%',
        }
        break
      case ('ibr'):
        positionProperties = {
          justifyContent: 'flex-end',
          left: 0,
          bottom: 0,
          width: '100%',
        }
        break
      case ('ibc'):
        positionProperties = {
          justifyContent: 'center',
          left: 0,
          bottom: 0,
          width: '100%',
        }
        break
      case ('ibl'):
        positionProperties = {
          justifyContent: 'flex-start',
          left: 0,
          bottom: 0,
          width: '100%',
        }
        break
      case ('imc'):
        positionProperties = {
          alignItems: 'center',
          height: '100%',
          justifyContent: 'center',
          left: 0,
          top: 0,
          width: '100%',
        }
        break
      case ('otl'):
        positionProperties = {
          justifyContent: 'flex-start',
          left: 0,
          top: `calc(-14px - ${labelOffset.top}px - ${tokens.space.xxs}px)`,
          width: '100%',
        }
        break
      case ('otc'):
        positionProperties = {
          justifyContent: 'center',
          left: 0,
          top: `calc(-14px - ${labelOffset.top}px - ${tokens.space.xxs}px)`,
          width: '100%',
        }
        break
      case ('otr'):
        positionProperties = {
          justifyContent: 'flex-end',
          left: 0,
          top: `calc(-14px - ${labelOffset.top}px - ${tokens.space.xxs}px)`,
          width: '100%',
        }
        break
      case ('ort'):
        positionProperties = {
          justifyContent: 'flex-start',
          left: `calc(100% + ${labelOffset.right}px + ${tokens.space.xxs}px)`,
          top: 0,
        }
        break
      case ('orm'):
        positionProperties = {
          alignItems: 'center',
          height: '100%',
          justifyContent: 'flex-start',
          left: `calc(100% + ${labelOffset.right}px + ${tokens.space.xxs}px)`,
          top: 0,
        }
        break
      case ('orb'):
        positionProperties = {
          justifyContent: 'flex-start',
          left: `calc(100% + ${labelOffset.right}px + ${tokens.space.xxs}px)`,
          bottom: 0,
        }
        break
      case ('obr'):
        positionProperties = {
          justifyContent: 'flex-end',
          left: 0,
          bottom: `calc(-14px - ${labelOffset.bottom}px - ${tokens.space.xxs}px)`,
          width: '100%',
        }
        break
      case ('obc'):
        positionProperties = {
          justifyContent: 'center',
          left: 0,
          bottom: `calc(-14px - ${labelOffset.bottom}px - ${tokens.space.xxs}px)`,
          width: '100%',
        }
        break
      case ('obl'):
        positionProperties = {
          justifyContent: 'flex-start',
          left: 0,
          bottom: `calc(-14px - ${labelOffset.bottom}px - ${tokens.space.xxs}px)`,
          width: '100%',
        }
        break
      case ('olb'):
        positionProperties = {
          justifyContent: 'flex-start',
          right: `calc(100% + ${labelOffset.left}px + ${tokens.space.xxs}px)`,
          bottom: 0,
        }
        break
      case ('olm'):
        positionProperties = {
          alignItems: 'center',
          height: '100%',
          justifyContent: 'flex-start',
          right: `calc(100% + ${labelOffset.left}px + ${tokens.space.xxs}px)`,
          bottom: 0,
        }
        break
      case ('olt'):
        positionProperties = {
          justifyContent: 'flex-start',
          right: `calc(100% + ${labelOffset.left}px + ${tokens.space.xxs}px)`,
          top: 0,
        }
        break
      default:
        positionProperties = {
          justifyContent: 'flex-start',
          left: 0,
          top: 0,
          width: '100%',
        }
    }

    return (
      {
        display: 'flex',
        color: labelColor,
        lineHeight: 1,
        opacity: isDimmed ? '.25' : 1,
        padding: tokens.space.xxxs,
        position: 'absolute',
        whiteSpace: 'nowrap',
        zIndex: 8,
        ...positionProperties,
      }
    )
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
          margin: `0 0 ${tokens.space.sm}px`,
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
          userSelect: 'none',
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
          background: tokens.color.background.default,
          border: tokens.border.input,
          borderRadius: tokens.border.radius.interactive,
          color: tokens.color.text.default,
          display: 'block',
          fontSize: tokens.font.size.xs,
          padding: `${tokens.space.xxxs}px ${tokens.space.xxs}px`,
          width: '100%',
          '&[type="color"]': {
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            height: 25,
            padding: 0,
            margin: '0 0 0 -2px',
            verticalAlign: 'middle',
            width: 21,
          }
        },
        'input[type="checkbox"]': {
          margin: `0 ${tokens.space.xxs}px 0 0`,
        },
        input: {
          outline: 'none',
          ':focus': {
            boxShadow: tokens.shadow.focus,
          }
        },
        select: {
          background: tokens.color.background.default,
          border: tokens.border.input,
          borderRadius: tokens.border.radius.interactive,
          display: 'block',
          fontSize: tokens.font.size.xs,
          width: '100%',
          outline: 'none',
          ':focus': {
            boxShadow: tokens.shadow.focus,
          }
        },
        '.control-panel': {
          alignItems: 'center',
          border: tokens.border.component,
          borderRadius: tokens.border.radius.default,
          background: tokens.color.background.default,
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: tokens.space.md,
          padding: tokens.space.sm,
          'input[type="number"]': {
            width: '55px',
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
          cursor: 'pointer',
          height: '40px',
          margin: '0 auto',
        },
        '.input-group-horizontal': {
          alignItems: 'center',
          display: 'grid',
          gridGap: tokens.space.xxs,
          gridTemplateColumns: 'auto 1fr',
          marginBottom: tokens.space.xs,
          label: {
            margin: 0,
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
          },
          'input[type="text"]': {
            width: '60px',
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
            height: '1px !important',
            width: '100px !important',
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
            padding: `${tokens.space.sm}px ${tokens.space.md}px`,
            position: 'relative',
            '&:first-of-type': {
              background: tokens.color.background.light,
              borderRight: tokens.border.component,
              paddingTop: 0,
            },
            '&:last-of-type': {
              background: tokens.color.background.light,
              borderLeft: tokens.border.component,
            }
          }
        })}
      >
        <div>
          <div
            css={css({
              backgroundColor: tokens.color.background.light,
              borderBottom: tokens.border.component,
              margin: `0 -${tokens.space.md}px ${tokens.space.sm}px`,
              padding: `${tokens.space.md + 2}px ${tokens.space.md}px`,
              position: 'sticky',
              top: 0,
              zIndex: 10,
            })}
          >
            <span
              ref={linkCopiedNotification}
              className="notification"
              css={css({
                bottom: 2,
                left: tokens.space.md - 2,
                position: 'absolute',
              })}
            >
              Link copied to clipboard!
            </span>
            <div
              css={css({
                display: 'flex',
                '> div': {
                  display: 'flex',
                  flexGrow: 1,
                }
              })}
            >
              <div
                css={css({
                  justifyContent: 'flex-start',
                })}
              >
                <Button label="Copy link" onClick={() => copyLink() } size="small" variant="primary" />
                <input
                  ref={linkHiddenInput}
                  value=""
                  type="text"
                  readOnly
                  className="accessibly-hidden"
                  tabIndex="-1"
                />
              </div>
              <div
                css={css({
                  justifyContent: 'center',
                })}
              >
                <Button label="Download PNG" onClick={() => savePNG() } size="small" />
              </div>
              <div
                css={css({
                  justifyContent: 'flex-end',
                })}
              >
                <Button label="Reset" onClick={() => resetProperties() } size="small" />
              </div>
            </div>
          </div>
          <h2>Properties</h2>
          <form>
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
                    <CheckboxEye
                      ariaLabel="show margin top unit"
                      label="Top"
                      onChange={(checkedState) => setMarginTopUnitIsVisible(checkedState)}
                      checked={marginTopUnitIsVisible}
                    />
                    <input
                      aria-label="margin top"
                      value={marginTop}
                      type="number"
                      onChange={(e) => setMarginTop(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show margin right unit"
                      label="Right"
                      onChange={(checkedState) => setMarginRightUnitIsVisible(checkedState)}
                      checked={marginRightUnitIsVisible}
                    />
                    <input
                      aria-label="margin right"
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
                      outline: `6px solid ${marginBackgroundColor}`,
                    }}
                    onClick={() => marginBackgroundColorInput.current.click()}
                  />
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show margin bottom unit"
                      label="Bottom"
                      onChange={(checkedState) => setMarginBottomUnitIsVisible(checkedState)}
                      checked={marginBottomUnitIsVisible}
                    />
                    <input
                      aria-label="margin bottom"
                      value={marginBottom}
                      type="number"
                      onChange={(e) => setMarginBottom(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show margin left unit"
                      label="Left"
                      onChange={(checkedState) => setMarginLeftUnitIsVisible(checkedState)}
                      checked={marginLeftUnitIsVisible}
                    />
                    <input
                      aria-label="margin left"
                      value={marginLeft}
                      type="number"
                      onChange={(e) => setMarginLeft(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <CheckboxEye
                    ariaLabel="show margin label"
                    label="Label:"
                    onChange={(checkedState) => setMarginLabelIsVisible(checkedState)}
                    checked={marginLabelIsVisible}
                  />
                </div>
                <div>
                  <input
                    aria-label="margin label"
                    value={marginLabel}
                    type="text"
                    onChange={(e) => setMarginLabel(e.target.value)}
                    onClick={(e) => e.target.select()}
                  />
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                <label>Label Position:</label>
                </div>
                <div>
                  <select
                    value={marginLabelPosition}
                    onChange={(e) => setMarginLabelPosition(e.target.value)}
                  >
                    {labelPositionSelectOptions()}
                  </select>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <label>Label Color:</label>
                </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={marginLabelColor}
                        type="color"
                        onChange={(e) => setMarginLabelColor(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        value={marginLabelColor}
                        type="text"
                        onChange={(e) => setMarginLabelColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <label>Unit Color:</label>
                </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={marginUnitColor}
                        type="color"
                        onChange={(e) => setMarginUnitColor(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        value={marginUnitColor}
                        type="text"
                        onChange={(e) => setMarginUnitColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                <label>Background Color:</label>
                  </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={marginBackgroundColor}
                        type="color"
                        onChange={(e) => setMarginBackgroundColor(e.target.value)}
                        ref={marginBackgroundColorInput}
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
                    <CheckboxEye
                      ariaLabel="show border top unit"
                      label="Top"
                      onChange={(checkedState) => setBorderTopUnitIsVisible(checkedState)}
                      checked={borderTopUnitIsVisible}
                    />
                    <input
                      aria-label="border top"
                      value={borderTop}
                      type="number"
                      onChange={(e) => setBorderTop(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                    
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show border right unit"
                      label="Right"
                      onChange={(checkedState) => setBorderRightUnitIsVisible(checkedState)}
                      checked={borderRightUnitIsVisible}
                    />
                    <input
                      aria-label="border right"
                      value={borderRight}
                      type="number"
                      onChange={(e) => setBorderRight(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div
                    className="control-panel__thumbnail"
                    style={{
                      border: `1px solid ${borderBackgroundColor}`,
                    }}
                    onClick={() => borderBackgroundColorInput.current.click()}
                  />
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show border bottom unit"
                      label="Bottom"
                      onChange={(checkedState) => setBorderBottomUnitIsVisible(checkedState)}
                      checked={borderBottomUnitIsVisible}
                    />
                    <input
                      aria-label="margin bottom"
                      value={borderBottom}
                      type="number"
                      onChange={(e) => setBorderBottom(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show border left unit"
                      label="Left"
                      onChange={(checkedState) => setBorderLeftUnitIsVisible(checkedState)}
                      checked={borderLeftUnitIsVisible}
                    />
                    <input
                      aria-label="border left"
                      value={borderLeft}
                      type="number"
                      onChange={(e) => setBorderLeft(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <CheckboxEye
                    ariaLabel="show border label"
                    label="Label:"
                    onChange={(checkedState) => setBorderLabelIsVisible(checkedState)}
                    checked={borderLabelIsVisible}
                  />
                </div>
                <div>
                  <input
                    aria-label="border label"
                    value={borderLabel}
                    type="text"
                    onChange={(e) => setBorderLabel(e.target.value)}
                    onClick={(e) => e.target.select()}
                  />
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                <label>Label Position:</label>
                </div>
                <div>
                  <select
                    value={borderLabelPosition}
                    onChange={(e) => setBorderLabelPosition(e.target.value)}
                  >
                    {labelPositionSelectOptions()}
                  </select>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <label>Label Color:</label>
                </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={borderLabelColor}
                        type="color"
                        onChange={(e) => setBorderLabelColor(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        value={borderLabelColor}
                        type="text"
                        onChange={(e) => setBorderLabelColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <label>Unit Color:</label>
                </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={borderUnitColor}
                        type="color"
                        onChange={(e) => setBorderUnitColor(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        value={borderUnitColor}
                        type="text"
                        onChange={(e) => setBorderUnitColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                <label>Background Color:</label>
                  </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={borderBackgroundColor}
                        type="color"
                        onChange={(e) => setBorderBackgroundColor(e.target.value)}
                        ref={borderBackgroundColorInput}
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
                    <CheckboxEye
                      ariaLabel="show padding top unit"
                      label="Top"
                      onChange={(checkedState) => setPaddingTopUnitIsVisible(checkedState)}
                      checked={paddingTopUnitIsVisible}
                    />
                    <input
                      aria-label="padding top"
                      value={paddingTop}
                      type="number"
                      onChange={(e) => setPaddingTop(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                    
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show padding right unit"
                      label="Right"
                      onChange={(checkedState) => setPaddingRightUnitIsVisible(checkedState)}
                      checked={paddingRightUnitIsVisible}
                    />
                    <input
                      aria-label="padding right"
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
                      border: `6px solid ${paddingBackgroundColor}`,
                    }}
                    onClick={() => paddingBackgroundColorInput.current.click()}
                  />
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show padding bottom unit"
                      label="Bottom"
                      onChange={(checkedState) => setPaddingBottomUnitIsVisible(checkedState)}
                      checked={paddingBottomUnitIsVisible}
                    />
                    <input
                      aria-label="padding bottom"
                      value={paddingBottom}
                      type="number"
                      onChange={(e) => setPaddingBottom(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show padding left unit"
                      label="Left"
                      onChange={(checkedState) => setPaddingLeftUnitIsVisible(checkedState)}
                      checked={paddingLeftUnitIsVisible}
                    />
                    <input
                      aria-label="padding left"
                      value={paddingLeft}
                      type="number"
                      onChange={(e) => setPaddingLeft(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <CheckboxEye
                    ariaLabel="show padding label"
                    label="Label:"
                    onChange={(checkedState) => setPaddingLabelIsVisible(checkedState)}
                    checked={paddingLabelIsVisible}
                  />
                </div>
                <div>
                  <input
                    aria-label="padding label"
                    value={paddingLabel}
                    type="text"
                    onChange={(e) => setPaddingLabel(e.target.value)}
                    onClick={(e) => e.target.select()}
                  />
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                <label>Label Position:</label>
                </div>
                <div>
                  <select
                    value={paddingLabelPosition}
                    onChange={(e) => setPaddingLabelPosition(e.target.value)}
                  >
                    {labelPositionSelectOptions()}
                  </select>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <label>Label Color:</label>
                </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={paddingLabelColor}
                        type="color"
                        onChange={(e) => setPaddingLabelColor(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        value={paddingLabelColor}
                        type="text"
                        onChange={(e) => setPaddingLabelColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <label>Unit Color:</label>
                </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={paddingUnitColor}
                        type="color"
                        onChange={(e) => setPaddingUnitColor(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        value={paddingUnitColor}
                        type="text"
                        onChange={(e) => setPaddingUnitColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                <label>Background Color:</label>
                  </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={paddingBackgroundColor}
                        type="color"
                        onChange={(e) => setPaddingBackgroundColor(e.target.value)}
                        ref={paddingBackgroundColorInput}
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
                    <CheckboxEye
                      ariaLabel="show element width"
                      label="Width"
                      onChange={(checkedState) => setElementWidthUnitIsVisible(checkedState)}
                      checked={elementWidthUnitIsVisible}
                    />
                    <input
                      aria-label="element width"
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
                    }}
                    onClick={() => elementBackgroundColorInput.current.click()}
                  />
                </div>

                <div className="control-panel__cell">
                  
                </div>

                <div className="control-panel__cell">
                  <div className="input-group">
                    <CheckboxEye
                      ariaLabel="show element height"
                      label="Height"
                      onChange={(checkedState) => setElementHeightUnitIsVisible(checkedState)}
                      checked={elementHeightUnitIsVisible}
                    />
                    <input
                      aria-label="element height"
                      value={elementHeight}
                      type="number"
                      onChange={(e) => setElementHeight(parseInt(e.target.value))}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <CheckboxEye
                    ariaLabel="show element label"
                    label="Label:"
                    onChange={(checkedState) => setElementLabelIsVisible(checkedState)}
                    checked={elementLabelIsVisible}
                  />
                </div>
                <div>
                  <input
                    aria-label="element label"
                    value={elementLabel}
                    type="text"
                    onChange={(e) => setElementLabel(e.target.value)}
                    onClick={(e) => e.target.select()}
                  />
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                <label>Label Position:</label>
                </div>
                <div>
                  <select
                    value={elementLabelPosition}
                    onChange={(e) => setElementLabelPosition(e.target.value)}
                  >
                    {labelPositionSelectOptions('element')}
                  </select>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <label>Label Color:</label>
                </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={elementLabelColor}
                        type="color"
                        onChange={(e) => setElementLabelColor(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        value={elementLabelColor}
                        type="text"
                        onChange={(e) => setElementLabelColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                  <label>Unit Color:</label>
                </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={elementUnitColor}
                        type="color"
                        onChange={(e) => setElementUnitColor(e.target.value)}
                      />
                    </div>

                    <div>
                      <input
                        value={elementUnitColor}
                        type="text"
                        onChange={(e) => setElementUnitColor(e.target.value)}
                        onClick={(e) => e.target.select()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="input-group-horizontal">
                <div>
                <label>Background Color:</label>
                  </div>
                <div>
                  <div className="color-picker-input-grid">
                    <div>
                      <input
                        value={elementBackgroundColor}
                        type="color"
                        onChange={(e) => setElementBackgroundColor(e.target.value)}
                        ref={elementBackgroundColorInput}
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
              id="box-model"
              css={css({
                display: 'inline-block',
                padding: '20px 50px',
              })}
            >
              <div
                css={css({
                  background: marginBackgroundColor,
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
                      ...getLabelStyles('margin'),
                    })}
                  >
                    {marginLabel}
                  </div>
                )}
                {marginTopUnitIsVisible && (
                  <div
                    css={css({
                      alignItems: 'center',
                      color: marginUnitColor,
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
                )}
                {marginRightUnitIsVisible && (
                  <div
                    css={css({
                      alignItems: 'center',
                      color: marginUnitColor,
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
                )}
                {marginBottomUnitIsVisible && (
                  <div
                    css={css({
                      alignItems: 'center',
                      color: marginUnitColor,
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
                )}
                {marginLeftUnitIsVisible && (
                  <div
                    css={css({
                      alignItems: 'center',
                      color: marginUnitColor,
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
                )}
                <div
                  css={css({
                    background: borderBackgroundColor,
                    display: 'inline-flex',
                    paddingTop: borderTop,
                    paddingRight: borderRight,
                    paddingBottom: borderBottom,
                    paddingLeft: borderLeft,
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
                      ...getLabelStyles('border'),
                    })}
                    >
                      {borderLabel}
                    </div>
                  )}
                  {borderTopUnitIsVisible && (
                    <div
                      css={css({
                        alignItems: 'center',
                        color: borderUnitColor,
                        display: 'flex',
                        height: borderTop,
                        justifyContent: 'center',
                        left: 0,
                        opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        zIndex: 8,
                      })}
                    >
                      {borderTop.toLocaleString()}
                    </div>
                  )}
                  {borderRightUnitIsVisible && (
                    <div
                      css={css({
                        alignItems: 'center',
                        color: borderUnitColor,
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: borderRight,
                        zIndex: 8,
                      })}
                    >
                      {borderRight.toLocaleString()}
                    </div>
                  )}
                  {borderBottomUnitIsVisible && (
                    <div
                      css={css({
                        alignItems: 'center',
                        color: borderUnitColor,
                        display: 'flex',
                        height: borderBottom,
                        justifyContent: 'center',
                        left: 0,
                        opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        zIndex: 8,
                      })}
                    >
                      {borderBottom.toLocaleString()}
                    </div>
                  )}
                  {borderLeftUnitIsVisible && (
                    <div
                      css={css({
                        alignItems: 'center',
                        color: borderUnitColor,
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        left: 0,
                        opacity: (marginIsHighlighted || paddingIsHighlighted || elementIsHighlighted) ? '.25' : 1,
                        position: 'absolute',
                        top: 0,
                        width: borderLeft,
                        zIndex: 8,
                      })}
                    >
                      {borderLeft.toLocaleString()}
                    </div>
                  )}
                  <div
                    css={css({
                      alignItems: 'center',
                      background: paddingBackgroundColor,
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
                          ...getLabelStyles('padding'),
                        })}
                      >
                        {paddingLabel}
                      </div>
                    )}
                    {paddingTopUnitIsVisible && (
                      <div
                        css={css({
                          alignItems: 'center',
                          color: paddingUnitColor,
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
                    )}
                    {paddingRightUnitIsVisible && (
                      <div
                        css={css({
                          alignItems: 'center',
                          color: paddingUnitColor,
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
                    )}
                    {paddingBottomUnitIsVisible && (
                      <div
                        css={css({
                          alignItems: 'center',
                          color: paddingUnitColor,
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
                    )}
                    {paddingLeftUnitIsVisible && (
                      <div
                        css={css({
                          alignItems: 'center',
                          color: paddingUnitColor,
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
                    )}
                    <div
                      css={css({
                        background: elementBackgroundColor,
                        height: elementHeight - (borderTop + borderBottom) - (paddingTop + paddingBottom),
                        position: 'relative',
                        width: elementWidth - (borderRight + borderLeft) - (paddingRight + paddingLeft),
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
                          ...getLabelStyles('element'),
                        })}
                        >
                          {elementLabel}
                        </div>
                      )}
                      {(elementWidthUnitIsVisible || elementHeightUnitIsVisible) && (
                        <div
                          css={css({
                            alignItems: 'center',
                            color: elementUnitColor,
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
                          {elementWidthUnitIsVisible && (<span>{elementWidth.toLocaleString()}</span>)}
                          {(elementWidthUnitIsVisible && elementHeightUnitIsVisible) && (<span>&nbsp;x&nbsp;</span>)}
                          {elementHeightUnitIsVisible && (<span>{elementHeight.toLocaleString()}</span>)}
                        </div>
                      )}
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

          <Button label="Copy CSS" onClick={() => copyCSS() } size="small" />
          <span ref={cssCopiedNotification} className="notification">
            CSS copied to clipboard!
          </span>
          <textarea
            ref={cssCodeHiddenTextarea}
            value={styleBlock}
            readOnly
            className="accessibly-hidden"
            tabIndex="-1"
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
    unitColor: tokens.color.text.default,
    top: 32,
    right: 32,
    bottom: 32,
    left: 32,
    label: 'margin',
    labelPosition: 'itl',
  },
  border: {
    backgroundColor: '#fde1a0',
    labelColor: tokens.color.text.default,
    unitColor: tokens.color.text.default,
    top: 8,
    right: 8,
    bottom: 8,
    left: 8,
    label: 'border',
    labelPosition: 'itl',
  },
  padding: {
    backgroundColor: '#c4ddb9',
    labelColor: tokens.color.text.default,
    unitColor: tokens.color.text.default,
    top: 16,
    right: 16,
    bottom: 16,
    left: 16,
    label: 'padding',
    labelPosition: 'itl',
  },
  element: {
    backgroundColor: '#a1c6e7',
    labelColor: tokens.color.text.default,
    unitColor: tokens.color.text.default,
    width: 200,
    height: 200,
    label: 'element',
    labelPosition: 'itl',
  },
}

export default BoxModelVisualizer
