/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-blue-98": "#f7f8fa",
        "grey-blue-50": "#4d5e80",
        "teal-blue": "#33bfff",
        "grey-blue-70": "#7d8fb3",
        "grey-blue-97": "#f5f6f7",
        white: "#fff",
        "grey-blue-80": "#adb8cc",
        "grey-blue-60": "#6b7a99",
        blue: "#3361ff",
        "grey-blue-90": "#dadee6",
        "grey-blue-95": "#edeff2",
        pink: "#e62e7b",
        limegreen: "#29cc39",
        yellow: "#ffcb33",
        red: "#e62e2e",
        orange: "#ff6633",
        purple: "#8833ff",
        dimgray: "#4c4c4c",
        darkgray: "#9c9c9c",
        gray: "#fdfdfd",
        whitesmoke: "#f0f0f0",
      },
      fontFamily: {
        "bold-12": "Roboto",
        "sf-pro-display": "'SF Pro Display'",
      },
      borderRadius: {
        xl: "20px",
        "6xs": "7px",
        "81xl": "100px",
        "3xs": "10px",
        mini: "15px",
        "11xl": "30px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      smi: "13px",
      lg: "18px",
      "3xs": "10px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
