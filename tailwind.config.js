/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#7D6B61",
          100: "#BF9D7D",
          80: "#D0B79F",
          60: "#E1C0C2",
          40: "#F1EAE4",
          tint: "#FAF7F5",
        },
        success: {
          120: "#29B56B",
          base: "#52D7D0",
          20: "",
          10: "#E1F7F7",
        },
        info: {
          120: "#1D8AFC",
          base: "#6AB8E3",
          20: "",
          10: "#E1F1FE",
        },
        alert: {
          120: "#D62828",
          base: "#EB8A5B",
          20: "",
          10: "#FCD5D1",
        },
        neutral: {
          background: "#140F0A",
          100: "#000000",
          0: "#FFFFFF",
          10: "#F9F9F9",
          40: "#E1E1E1",
          60: "#909090",
          80: "#484848",
          black: "#000000",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
