import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f3ec",
        bone: "#eee6da",
        sand: "#cdbda8",
        taupe: "#9f9183",
        clay: "#b8896d",
        graphite: "#2d2c2a",
        ink: "#151412",
        mist: "#ded8cf"
      },
      fontFamily: {
        serif: ["var(--font-editorial)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(21, 20, 18, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
