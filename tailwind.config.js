const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["*.html", "*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.warmGray,
      blue: colors.indigo,
    },
    extend: {
      padding: {
        "1/3": "33.33333%",
      },
    },
  },
  variants: {},
  plugins: [],
};
