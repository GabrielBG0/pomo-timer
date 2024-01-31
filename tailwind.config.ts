import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      header: ["Lora", "serif"],
      body: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        bg: "#FFC9C9",
        primary: "#822C26",
        secondary: "#D16F6F",
        border: "#eca29d",
      },
    },
    plugins: [],
  },
};

export default config;
