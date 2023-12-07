/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        steelblue: "#3178a0",
        black: "#000",
        gray: {
          "100": "#111",
          "200": "rgba(0, 0, 0, 0.8)",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#dfdfdf",
        },
        "grey-aaa": "#595959",
        "grey-aa-large": "#949494",
        blue: "#4200ff",
        "light-grey": "#cacaca",
        "text-color": "#1a1a1a",
        limegreen: "#1dce00",
        red: "rgba(255, 0, 0, 0.8)",
        darkgray: "#9e9e9e",
        indianred: "#db5757",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "primary-caption-13": "Gilroy",
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
        "30xl": "49px",
        "13xl": "32px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "5xl": "24px",
      sm: "14px",
      "2xs": "11px",
      base: "16px",
      smi: "13px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
