/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.10)",
        md: "0 4px 6px rgba(0, 0, 0, 0.10)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.10)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
        "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.10)",
        },
        ".text-shadow-md": {
          textShadow: "0 4px 6px rgba(0, 0, 0, 0.10)",
        },
        ".text-shadow-lg": {
          textShadow: "0 10px 15px rgba(0, 0, 0, 0.10)",
        },
        ".text-shadow-xl": {
          textShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
        },
        ".text-shadow-2xl": {
          textShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "focus"]);
    },
  ],
};
