import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: "Pretendard",
      },
      colors: {
        main: "#e67800",
        "tech-black": {
          100: "#A3A3A3",
          200: "#737373",
          300: "#222222",
        },
      },
    },
  },
  plugins: [],
};
export default config;
