const tailwindcssDefaultConfig = require("tailwindcss/defaultConfig");
const plugin = require("tailwindcss/plugin");

const scales = {
  auto: "auto",
  content: "fit-content",
  full: "100%",
  0: "0",
  1: "1px",
  2: "2px",
  3: "3px",
  4: "4px",
  5: "5px",
  6: "6px",
  7: "7px",
  8: "8px",
  9: "9px",
  10: "10px",
  11: "11px",
  12: "12px",
  13: "13px",
  14: "14px",
  15: "15px",
  16: "16px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  56: "56px",
  64: "64px",
  72: "72px",
  80: "80px",
  88: "88px",
  96: "96px",
  104: "104px",
  112: "112px",
  120: "120px",
  128: "128px",
  160: "160px",
  320: "320px",
  640: "640px",
  1280: "1280px"
};

const brightness = {
  ".brightness-95": {
    filter: "brightness(95%)"
  },
  ".brightness-80": {
    filter: "brightness(80%)"
  }
};

module.exports = {
  purge: {
    enabled: false,
    content: [
      "./core/pages/**/*.{js,ts,jsx,tsx}",
      "./src/*.{js,ts,jsx,tsx}",
      "./features/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}"
    ]
  },
  theme: {
    ...tailwindcssDefaultConfig.theme,
    extend: {
      boxShadow: {
        DEFAULT: "0px 1px 10px rgba(196, 196, 196, 0.3)"
      },
      colors: {
        transparent: "transparent",
        primary: {
          500: "#40C0C0",
          100: "#EFFFFF"
        },
        secondary: {
          800: "#1C1932"
        },
        orange: {
          500: "#FF6B00",
          400: "#FF8C39"
        },
        green: {
          600: "#5BE21C"
        },
        red: {
          600: "#E2211C"
        },
        grey: {
          100: "#FBFBFB",
          200: "#EDEDED",
          300: "#D4D4D4",
          400: "#C4C4C4",
          500: "#A1A1A1",
          600: "#878787",
          700: "#6E6B6B",
          800: "#545151"
        }
      }
    },
    borderRadius: {
      3: "3px",
      20: "20px",
      full: "9999px"
    },
    spacing: { ...scales },
    minWidth: { ...scales },
    maxWidth: { ...scales },
    minHeight: { ...scales },
    maxHeight: { ...scales }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(brightness, {
        variants: ["group-hover", "active", "hover"]
      });
    })
  ]
};
