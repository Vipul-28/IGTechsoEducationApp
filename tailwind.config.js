/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#faf6fd",
        white: "#fff",
        darkslategray: {
          "100": "#43595c",
          "200": "#333",
        },
        black: "#000",
        darkviolet: "#8708c2",
        "primary-050": "#f0fdf4",
        "gray-500": "#556987",
        "gray-200": "#d5dae1",
        "gray-5001": "#667085",
        "gray-800": "#333f51",
        dimgray: "#666",
        plum: "#9c79b3",
        whitesmoke: "#ededed",
        gray1: {
          "100": "#1c1c1c",
          "200": "rgba(255, 255, 255, 0.4)",
        },
        thistle: "#edcafe",
        lavender: {
          "100": "#f6e1ff",
          "200": "rgba(246, 227, 255, 0.4)",
          "300": "rgba(246, 227, 255, 0.3)",
        },
        lavenderblush: {
          "100": "rgba(255, 238, 238, 0.4)",
          "200": "rgba(255, 238, 238, 0.3)",
        },
      },
      spacing: {},
      fontFamily: {
        "text-md-medium": "Poppins",
        "roboto-slab": "'Roboto Slab'",
        inter: "Inter",
        futura: "Futura",
        "fuzzy-bubbles": "'Fuzzy Bubbles'",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        sm: "14px",
        "xl-9": "20.9px",
        "12xs": "1px",
      },
    },
    fontSize: {
      xs: "12px",
      "2xs": "11px",
      "xl-7": "20.7px",
      mid: "17px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      lgi: "19px",
      "5xl": "24px",
      "9xl": "28px",
      mini: "15px",
      "3xs": "10px",
      smi: "13px",
      "lgi-3": "19.3px",
      lg: "18px",
      "41xl": "60px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq550: {
        raw: "screen and (max-width: 550px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
