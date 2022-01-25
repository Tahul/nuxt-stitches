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
        gray500: 'hsl(206,10%,76%)',
        blue500: 'hsl(206,100%,50%)',
        purple500: 'hsl(252,78%,60%)',
        green500: 'hsl(148,60%,60%)',
        red500: 'hsl(352,100%,62%)'
      }
    }
  }
})
