import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1280px",
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Brand — Black & Gold spiritual
        obsidian: {
          DEFAULT: "#070605",
          deep: "#0A0807",
          soft: "#13100C",
          surface: "#1C1812",
        },
        gold: {
          DEFAULT: "#C9A86A",
          light: "#E2C788",
          deep: "#A8884A",
          dark: "#7A6234",
          50: "#F6EBC9",
          100: "#EAD9A5",
          200: "#DDC382",
          300: "#C9A86A",
          400: "#A8884A",
          500: "#7A6234",
        },
        parchment: {
          DEFAULT: "#EADBB5",
          dim: "#C8B68A",
        },
      },
      fontFamily: {
        // Thai-aware fallback so tone marks (ไม้โท ไม้เอก) render with their proper metrics
        serif: ["var(--font-serif)", "Fraunces", "var(--font-thai)", "IBM Plex Sans Thai", "Georgia", "serif"],
        sans: ["var(--font-sans)", "var(--font-thai)", "Inter", "system-ui", "sans-serif"],
        thai: ["var(--font-thai)", "var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-serif)", "Fraunces", "var(--font-thai)", "IBM Plex Sans Thai", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.025em" }],
        "display-xl": ["clamp(2.75rem, 6.5vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.8vw, 4.25rem)", { lineHeight: "1", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 6px)",
      },
      letterSpacing: {
        widest: "0.32em",
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(135deg, #E2C788 0%, #C9A86A 45%, #A8884A 100%)",
        "gradient-radial-gold":
          "radial-gradient(circle at center, rgba(201,168,106,0.18) 0%, rgba(7,6,5,0) 60%)",
        "gradient-fade-bottom":
          "linear-gradient(180deg, rgba(7,6,5,0) 0%, rgba(7,6,5,0.7) 70%, rgba(7,6,5,1) 100%)",
      },
      boxShadow: {
        gold: "0 20px 60px -25px rgba(201,168,106,0.35)",
        ring: "inset 0 0 0 1px rgba(201,168,106,0.25)",
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
        glow: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        glow: "glow 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
