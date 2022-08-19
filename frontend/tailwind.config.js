// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  variants: {
    extend: {
      lineClamp: ["responsive", "hover", "focus"],
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
  corePlugins: {
    preflight: false,
  },
};
