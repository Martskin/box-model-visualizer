const base = {
  color: {
    black: "#000000",
    white: "#FFFFFF",
    neutral: {
      97: "#F8F8F8",
      91: "#E8E8E8",
      86: "#DCDCDC",
      78: "#C8C8C8",
      74: "#BEBEBE",
      69: "#B0B0B0",
      56: "#909090",
      50: "#808080",
      18: "#303030",
    },
    blue: {
      45: "#095ddd",
      55: "#19cbff",
      60: "#3b86f7",
      95: "#e8f6ff",
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
      xxxs: base.space.default * .25,
      xxs: base.space.default * .5,
      xs: base.space.default * .625,
      sm: base.space.default * .75,
      md: base.space.default,
      lg: base.space.default * 1.25,
      xl: base.space.default * 1.5,
      xxl: base.space.default * 3.5,
      xxxl: base.space.default * 4,
    }
  },
  color: {
    text: {
      default: base.color.neutral[18],
      secondary: base.color.neutral[56],
      onDark: {
        default: base.color.white,
        secondary: base.color.neutral[86],
      },
      onInteractive: base.color.white,
      interactive: {
        default: base.color.blue[60],
        tertiary: base.color.neutral[50],
        focus: base.color.blue[95],
        disabled: base.color.neutral[56],
      }
    },
    background: {
      default: base.color.white,
      light: base.color.neutral[97],
      neutral: base.color.neutral[78],
      medium: base.color.neutral[50],
      dark: base.color.neutral[18],
      black: base.color.black,
      interactive: {
        default: base.color.blue[60],
        hover: {
          default: base.color.blue[95],
          primary: base.color.blue[45],
        },
        focus: base.color.blue[95],
        disabled: base.color.neutral[91],
      },
    }
  },
  space: {
    xxxs: base.space.default * .125,
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
      default: base.color.neutral[86],
      interactive: {
        default: base.color.blue[60],
        hover: {
          default: base.color.blue[60],
          primary: base.color.blue[45],
        },
        tertiary: base.color.neutral[50],
        focus: base.color.blue[95],
        disabled: base.color.neutral[78],
      },
    },
    width: {
      default: 1,
    },
    radius: {
      default: 3,
      interactive: 3,
    },
    component: `1px ${base.color.neutral[86]} solid`,
    input: `1px ${base.color.neutral[86]} solid`,
  },
  icon: {
    size: {
      default: base.space.default * .875,
    },
    color: {
      default: base.color.neutral[50],
      secondary: base.color.neutral[69],
    }
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
};
