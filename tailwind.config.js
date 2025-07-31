module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
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
        "wave-slow": {
          "0%, 100%": { transform: "translateX(-50%) scaleY(1) rotate(0deg)" },
          "25%": { transform: "translateX(-25%) scaleY(1.2) rotate(2deg)" },
          "50%": { transform: "translateX(0%) scaleY(0.8) rotate(0deg)" },
          "75%": { transform: "translateX(25%) scaleY(1.1) rotate(-2deg)" },
        },
        "wave-medium": {
          "0%, 100%": { transform: "translateX(50%) scaleY(1) rotate(0deg)" },
          "25%": { transform: "translateX(25%) scaleY(1.1) rotate(-2deg)" },
          "50%": { transform: "translateX(0%) scaleY(0.9) rotate(0deg)" },
          "75%": { transform: "translateX(-25%) scaleY(1.2) rotate(2deg)" },
        },
        "wave-fast": {
          "0%, 100%": { transform: "translateX(-30%) scaleY(1) rotate(0deg)" },
          "25%": { transform: "translateX(-10%) scaleY(1.3) rotate(3deg)" },
          "50%": { transform: "translateX(10%) scaleY(0.7) rotate(0deg)" },
          "75%": { transform: "translateX(30%) scaleY(1.1) rotate(-3deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px) scale(1)", opacity: "0.6" },
          "25%": { transform: "translateY(-20px) translateX(10px) scale(1.1)", opacity: "0.8" },
          "50%": { transform: "translateY(-10px) translateX(-5px) scale(0.9)", opacity: "0.4" },
          "75%": { transform: "translateY(-30px) translateX(15px) scale(1.2)", opacity: "0.7" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px) scale(1)", opacity: "0.4" },
          "25%": { transform: "translateY(-15px) translateX(-8px) scale(1.2)", opacity: "0.6" },
          "50%": { transform: "translateY(-25px) translateX(12px) scale(0.8)", opacity: "0.3" },
          "75%": { transform: "translateY(-5px) translateX(-15px) scale(1.1)", opacity: "0.5" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px) scale(1)", opacity: "0.5" },
          "25%": { transform: "translateY(-25px) translateX(15px) scale(1.3)", opacity: "0.7" },
          "50%": { transform: "translateY(-15px) translateX(-10px) scale(0.7)", opacity: "0.3" },
          "75%": { transform: "translateY(-35px) translateX(20px) scale(1.1)", opacity: "0.6" },
        },
        "hero-bg": {
          "0%, 100%": { 
            transform: "scale(1) translateY(0px) rotate(0deg)",
            filter: "brightness(1) contrast(1) saturate(1)"
          },
          "25%": { 
            transform: "scale(1.02) translateY(-2px) rotate(0.5deg)",
            filter: "brightness(1.05) contrast(1.02) saturate(1.1)"
          },
          "50%": { 
            transform: "scale(0.98) translateY(1px) rotate(-0.3deg)",
            filter: "brightness(0.98) contrast(1.05) saturate(0.95)"
          },
          "75%": { 
            transform: "scale(1.01) translateY(-1px) rotate(0.2deg)",
            filter: "brightness(1.02) contrast(1.01) saturate(1.05)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wave-slow": "wave-slow 8s ease-in-out infinite",
        "wave-medium": "wave-medium 6s ease-in-out infinite",
        "wave-fast": "wave-fast 4s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "float-medium": "float-medium 8s ease-in-out infinite",
        "float-fast": "float-fast 10s ease-in-out infinite",
        "hero-bg": "hero-bg 8s ease-in-out infinite",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
