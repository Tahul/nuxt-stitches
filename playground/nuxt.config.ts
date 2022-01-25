import { defineNuxtConfig } from 'nuxt3'
import StitchesModule from '../src/module'

export default defineNuxtConfig({
  modules: [StitchesModule],
  stitches: {
    global: {
      body: { margin: '4rem' }
    },
    theme: {
      colors: {
        gray: 'hsl(206,10%,76%)',
        blue: 'hsl(206,100%,50%)',
        purple: 'hsl(252,78%,60%)',
        green: 'hsl(148,60%,60%)',
        red: 'hsl(352,100%,62%)'
      }
    }
  }
})
