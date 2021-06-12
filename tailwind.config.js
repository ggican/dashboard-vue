module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: {
        table: "#DFE0EB",
      },
      textColor: {
        sidebar: {
          text: "#b3b3b3",
        },
        table: {
          head: "#9FA2B4",
        },
      },
      colors: {
        sidebar: {
          background: "#363740",
          text: "#A4A6B3",
          "button-active": "#505050",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
