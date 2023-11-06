import { defineConfig } from "@pandacss/dev"
import { buttonRecipe } from "./src/components/recipes/button.recipe"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
        breakpoints: {
          sm: '320px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px'
        },
        recipes: {
          button: buttonRecipe
        }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    
})