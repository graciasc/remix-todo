import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-sans": "'Roboto Mono', monospace",
      },
    },
  },
  plugins: [],
} satisfies Config;
