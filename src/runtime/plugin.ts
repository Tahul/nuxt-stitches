import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createStitches, defaultThemeMap as _defaultThemeMap } from '@stitches/core'
import { useMeta } from '#imports'

export default defineNuxtPlugin(nuxtApp => {
  const { stitches } = useRuntimeConfig()

  const { themeMap, prefix, utils, theme, media, global } = stitches

  const { getCssText, globalCss, css, keyframes } = createStitches({
    media,
    prefix,
    theme,
    utils,
    themeMap
  })

  const globalStyles = globalCss(global)

  // Inject styles server-side
  nuxtApp.hook('vue:setup', () => {
    if (process.server) {
      globalStyles()

      const cssText = getCssText()

      useMeta({
        style: [
          {
            id: 'stitches',
            children: cssText
          }
        ]
      })
    }
  })

  return {
    provide: {
      stitches: {
        css,
        keyframes
      }
    }
  }
})
