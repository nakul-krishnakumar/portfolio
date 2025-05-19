import type { Config } from "tailwindcss";
import Animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			xs: '350px',
  			md: '1080px'
  		},
  		colors: {
  			primary: {
          "100": "#9191F6",
          "200": "#3D3DA3",
          DEFAULT: "#5151D7",
        },
        secondary: "#060112",
        black: {
            "100": "#333333",
            "200": "#141413",
            "300": "#6A6B6E",
            DEFAULT: "#000000",
        },
        white: {
            "100": "#F7F7F7",
            DEFAULT: "#FFFFFF",
        },
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			'poppins': [
  				'var(--font-poppins)',
				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'100': '2px 2px 0px 0px rgb(0, 0, 0)',
  			'200': '2px 2px 0px 2px rgb(0, 0, 0)',
  			'300': '2px 2px 0px 2px rgb(59, 214, 102)'
  		},
		backgroundImage: {
			'gradient-text': 'linear-gradient(to right, #8686f7, #9191F6)',
		}
  	}
  },
  plugins: [Animate],
};
export default config;
