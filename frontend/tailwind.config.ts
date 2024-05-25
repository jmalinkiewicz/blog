import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          "50": "#fff8e8",
          "100": "#feedc7",
          "200": "#fdda8a",
          "300": "#fcc14d",
          "400": "#fba924",
          "500": "#f5860b",
          "600": "#d96106",
          "700": "#b44109",
          "800": "#92320e",
          "900": "#782a0f",
          "950": "#451303",
        },
        shark: {
          "50": "#f7f8f8",
          "100": "#ededf1",
          "200": "#d8dadf",
          "300": "#b6b9c3",
          "400": "#8e93a2",
          "500": "#707687",
          "600": "#5a5f6f",
          "700": "#4a4d5a",
          "800": "#3f424d",
          "900": "#383a42",
          "950": "#212227",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
