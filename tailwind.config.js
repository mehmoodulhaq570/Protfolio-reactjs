// Colours are CSS variables (RGB channels) defined in src/index.css for light and dark,
// so one class such as `bg-paper` or `text-accent` covers both themes.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: token("paper"), // page background
        surface: token("surface"), // cards
        soft: token("soft"), // tinted fills: badges, hovers, callouts
        ink: token("ink"), // headings and body text
        muted: token("muted"), // secondary text
        faint: token("faint"), // meta text: dates, authors
        line: token("line"), // borders and rules
        accent: token("accent"), // links, buttons, highlights
        "accent-strong": token("accent-strong"), // hover and pressed accent
        "on-accent": token("on-accent"), // text on accent fills
        // The nav and footer stay dark in both themes.
        night: {
          DEFAULT: token("night"),
          ink: token("night-ink"),
          muted: token("night-muted"),
          accent: token("night-accent"),
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', "Georgia", "Cambria", "serif"],
        sans: ['"Inter Variable"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
