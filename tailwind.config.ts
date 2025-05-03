
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // DearMe brand colors based on the penguin logo
        dearme: {
          primary: "#352315", // Dark brown from the penguin body
          accent: "#F68E4B", // Orange from feet and cards
          text: "#352315", // Text color (dark brown)
          background: "#FEF6E8", // Cream/beige background
          light: "#FEF9F2", // Lighter cream for cards, inputs
          mint: "#7CBEAF", // Mint green from the book
          yellow: "#FFC857", // Yellow from the emoji
          coral: "#F68E4B", // Coral/orange from the feet
          beige: "#FEF6E8", // Warm beige background
          check: "#6B8F71", // Green from check mark
        },
        // Additional colors
        penguin: {
          50: "#fef6e8",
          100: "#fdebd0",
          200: "#fad6a2",
          300: "#ffc857", // Yellow
          400: "#f68e4b", // Coral
          500: "#7cbeaf", // Mint
          600: "#6B8F71", // Check green
          700: "#5a463b",
          800: "#352315", // Dark brown
          900: "#2a1c12",
          950: "#1a110a",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        handwriting: ['Caveat', 'cursive'],
        comic: ['Comic Neue', 'cursive'], // Adding a more playful font for the penguin theme
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(to right bottom, #fef6e8, #fff2e2, #ffeeda, #ffead3, #ffe6cc)',
        'mint-gradient': 'linear-gradient(to right bottom, #7cbeaf, #8ac5b8, #97ccc2, #a4d4cb, #b0dbd5)',
        'coral-gradient': 'linear-gradient(to right bottom, #f68e4b, #f79b60, #f9a874, #fab589, #fbc19e)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
