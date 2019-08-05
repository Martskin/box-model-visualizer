const base = {
  color: {
    black: "#000000",
    white: "#FFFFFF",
    neutral: {
      10: "#F8F8F8",
      20: "#E8E8E8",
      30: "#DCDCDC",
      40: "#C8C8C8",
      50: "#BEBEBE",
      60: "#B0B0B0",
      70: "#909090",
      80: "#808080",
      90: "#303030",
    },
    blue: {
      55: "#19cbff",
      60: "#3232FF",
    },
    red: {
      52: "#DE2B2B",
    },
    green: {
      39: "#82B90D",
    },
    yellow: {
      47: "#F2E800",
    },
    orange: {
      47: "#F28600",
      61: "#FF893A",
    },
  },
  space: {
    default: 16
  },
}

module.exports = {
  font: {
    family: {
      'sansSerif': "'Roboto', sans-serif",
      'serif': "Helvetica Neue, Helvetica, Arial, sans-serif",
    },
    size: {
      xxs: base.space.default * .25,
      xs: base.space.default * .5,
      sm: base.space.default * .75,
      md: base.space.default,
      lg: base.space.default * 1.5,
      xl: base.space.default * 2,
      xxl: base.space.default * 3.5,
      xxxl: base.space.default * 4,
    }
  },
  color: {
    text: {
      default: base.color.neutral[90],
      secondary: base.color.neutral[70],
      onDark: {
        default: base.color.white,
        secondary: base.color.neutral[30],
      },
      interactive: {
        default: base.color.blue[55],
      }
    },
    background: {
      default: base.color.white,
      light: base.color.neutral[10],
      dark: base.color.neutral[90],
      black: base.color.black,
    }
  },
  space: {
    xxs: base.space.default * .25,
    xs: base.space.default * .5,
    sm: base.space.default * .75,
    md: base.space.default,
    lg: base.space.default * 2,
    xl: base.space.default * 3,
    xxl: base.space.default * 4,
  },
  border: {
    color: {
      default: base.color.neutral[60],
    },
    width: {
      default: 1,
    },
    radius: {
      default: 3,
    },
    component: `1px ${base.color.neutral[60]} solid`,
  },
  shadow: {
    default:' 0 0px 8px #251f1f',
  },
  layout: {
    breakpoint: {
      md: 960,
      xl: 1210,
    }
  },
  alert: {
    color: {
      background: {
        info: base.color.blue[60],
        error: base.color.red[52],
        warning: base.color.yellow[47],
        success: base.color.green[39],
      },
      text: {
        info: base.color.white,
        error: base.color.white,
        warning: base.color.black,
        success: base.color.white,
      }
    },
    icon: {
      info: "ⓘ",
      error: "☠️",
      warning: "⚠",
      success: "🎉",
    },
  },
};
