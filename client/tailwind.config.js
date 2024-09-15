/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "640px",
      lg: "768px",
      xl: "1140px",
      "2xl": "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "4rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#DB4444",
        light: "#FAFAFA",
        text: "rgba(0, 0, 0, 0.5)",
        "light-green": "#00FF66",
        "border-line": "rgba(0, 0, 0, 0.4)",
        inputBg: "#F5F5F5",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        inter: '"Inter", sans-serif',
      },
      backgroundImage: {
        productBanner: "url('/product_banner.png')",
      },
    },
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [require("daisyui")],
};
