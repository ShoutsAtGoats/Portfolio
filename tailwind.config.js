module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tight: "-.015em",
    },
    extend: {
      height: {
        "half-screen": "50vh",
      },
      rotate: {
        30: "30deg",
        60: "60deg",
      },
    },
  },
  plugins: [
    require("tailwindcss-3d"),
    ({ addUtilities }) => {
      addUtilities({
        ".backface-visible": {
          "backface-visibility": "visible",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      });
    },

    ({ addUtilities }) => {
      addUtilities({
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },

        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};
