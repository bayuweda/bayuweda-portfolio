/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins"],
      },
      colors: {
        background: "#14181A",
        primary: "#00A8CD",
        secondary: "#87E9FE",
      },
      animation: {
        goyang: "wiggle 1s ease-in-out infinite",
        muter: "spin 1s ease-in-out infinite",
        naik: "upDown 2s ease-in-out infinite",
        rightLeft: "rightLeft 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        upDown: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-25px)",
          },
        },
        rightLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-25px)",
          },
        },
      },
    },
  },
  plugins: [],
};
