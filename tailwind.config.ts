import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        // @ts-expect-error
        screen: ['100vh', '100svh'],
      },
      keyframes: {
        "move45degarrow": {
          '0%, 40%, 70%, 100%': { transform: 'translate(0,0)' },
          '50%, 60%, 80%, 90%': { transform: 'translate(0.5rem, -0.5rem)' }
        },
        "blink": {
          "50%,80%": {opacity: "0"},
          "0%": {opacity: "1"}
        }
      },
      animation: {
        "arrow-move": "move45degarrow 2s linear infinite",
        "cursor": "blink 0.6s infinite step-end"
      },
      colors: {
        "project": {
          "100": "rgba(2, 17, 41, 1)",
          "200": "rgba(2, 17, 41, 0.5)"
        },
        "divider": "#5F789729",
        "light-grey": "#dceafd",
        "white": "#fff",
        "dark": "#000815",
        "stroke": "rgba(95, 120, 151, 0.3)",
        "overlay-from": "rgba(2, 17, 41, 0.50)",
        "overlay-to": "rgba(2, 17, 41, 0.50) 100%)",
      },
      spacing: {},
      fontFamily: {
        // "raleway": "Raleway",
        // "source-sans-3": ['"Source Sans 3"', 'ui-sans-serif', 'system-ui'],
        "raleway": "var(--raleway-font)",
        "source-sans-3": "var(--sourcesans-font)"
      },
      borderRadius: {
        "3xs": "10px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      "3xs": "8px",
      "2xs": "10px",
      "xs": "12px",
      "sm": "14px",
      "md": "16px",
      "base": "16px",
      "lg": "18px",
      "xl": "20px",
      "5xl": "24px",
      "21xl": "40px",
      "41xl": "60px",
      "11xl": "30px",
      "61xl": "80px",
      "111xl": "130px",
      "inherit": "inherit"
    }
  },
  plugins: [
    require("@tailwindcss/container-queries"),
  ],
}

export default config
