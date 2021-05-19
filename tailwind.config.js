const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["GT-Walsheim-Pro", fontFamily.sans],
        body: ["GT-Walsheim-Pro", fontFamily.serif],
        mono: ["IBM Plex Mono", fontFamily.mono]
      },
      colors: {
        tuna: {
          100: "#6C7A91",
          200: "#5D697C",
          300: "#4E5768",
          400: "#3E4653",
          500: "#2F353F",
          600: "#242930",
          700: "#191C22",
          800: "#0E1013",
          900: "#030405"
        }
      }
    }
  },
  variants: {
    extend: {
      scale: ["group-hover"]
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography")
  ]
}
