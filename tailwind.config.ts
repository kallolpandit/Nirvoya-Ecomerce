import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: "#0970CD",
        primary: "#383838",
        secondary: "#333333",
      },
    },
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      banner: "url('/images/banner.png')",
    },
  },
  plugins: [],
};
export default config;
