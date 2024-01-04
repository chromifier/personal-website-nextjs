import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-grad ient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#333333",
          "secondary": "#2d86b5",
          "accent": "#24eaf1",
          "neutral": "#070707",
          "base-100": "#f1f1f1",
          "info": "#008bff",
          "success": "#00f1c9",
          "warning": "#c78f00",
          "error": "#ff4665",
        },
      }
    ]
  }
};
export default config;
