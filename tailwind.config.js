import { nextui } from "@nextui-org/react";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1760px",
    },
    fontFamily: {
      manropeRegular: ["ManropeRegular"],
      manropeMedium: ["ManropeMedium"],
      manropeSemiBold: ["ManropeSemiBold"],
      manropeBold: ["ManropeBold"],
    },
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      gap: {
        7.5: "30px",
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0, 0, 0, 0.5)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "4px",
          md: "16px",
          "2xl": "80px",
          "3xl": "162px",
        },
      },
      colors: {
        mainLight: "#F3F4F6",
        mainDark: "#1E1E1E",
        red: {
          45: "#E50000",
          50: "#FF0000",
          55: "#FF1919",
          60: "#FF3333",
          80: "#FF9999",
          90: "FFCCCC",
          95: "#FFE5E5",
          99: "FFFAFA",
        },
        black: {
          6: "#0F0F0F",
          8: "#141414",
          10: "#1A1A1A",
          12: "#1F1F1F",
          15: "#262626",
          20: "#333333",
          25: "#404040",
          30: "#4C4C4C",
        },
        gray: {
          60: "#999999",
          65: "#A6A6A6",
          70: "#B3B3B3",
          75: "#BFBFBF",
          85: "#d4d4d8",
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#1E1E1E",
          },
        },
        light: {
          colors: {
            background: "#F3F4F6",
          },
        },
      },
    }),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
