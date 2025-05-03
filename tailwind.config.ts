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
        // Dear Me brand colors
        dearme: {
          primary: "#487b8c", // Primary color for buttons, headers, icons, CTAs
          accent: "#4a7c8d", // Accent color for hover states, secondary buttons
          text: "#000000", // Base text color
          background: "#ffffff", // Clean white background
          light: "#fefefe", // Light accent color for cards, inputs
        },
        // Additional colors
        mindblue: {
          50: "#f0f7fa",
          100: "#e0eff5",
          200: "#c1dfeb",
          300: "#92c5da",
          400: "#5ea3c2",
          500: "#487b8c", // Brand primary
          600: "#3a6b7e",
          700: "#345a6a",
          800: "#2e4b59",
          900: "#2a404c",
        },
        mindpurple: {
          50: "#f5f3fa",
          100: "#eae5f4",
          200: "#d1cae7",
          300: "#b1a5d6",
          400: "#8c7ac0",
          500: "#7a6aaf",
          600: "#675497",
          700: "#56457c",
          800: "#483c67",
          900: "#3f3655",
          950: "#2a2239",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        handwriting: ['Caveat', 'cursive'],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
