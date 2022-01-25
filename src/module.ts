import { fileURLToPath } from 'url'
import { resolve } from 'pathe'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import { defaultThemeMap } from '@stitches/core'
import type { CSS as StitchesCSS } from '@stitches/core'
import type { ConfigType } from '@stitches/core/types/config'
import defu from 'defu'

export interface StitchesModuleOptions {
  global?: StitchesCSS
  media?: ConfigType.Media
  theme?: ConfigType.Theme
  prefix?: ConfigType.Prefix
  themeMap?: ConfigType.ThemeMap
}

export default defineNuxtModule<StitchesModuleOptions>({
  meta: {
    name: 'nuxt-stitches',
    configKey: 'stitches'
  },
  defaults: {
    global: {},
    theme: {},
    prefix: '',
    themeMap: defaultThemeMap
  },
  setup(options, nuxt) {
    const composablesDir = resolve(__dirname, './composables')
    const pluginPath = resolve(__dirname, './plugin')

    // Default runtimeConfig
    nuxt.options.publicRuntimeConfig.stitches = defu(nuxt.options.publicRuntimeConfig.stitches, options)

    // Transpile runtime parts
    nuxt.options.build.transpile.push(composablesDir, pluginPath)

    // Add plugin
    addPlugin(pluginPath)

    // Add composables
    nuxt.hook('autoImports:dirs', dirs => {
      dirs.push(resolve(__dirname, './composables'))
    })
  }
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    stitches?: StitchesModuleOptions
  }
  interface NuxtOptions {
    stitches?: StitchesModuleOptions
  }
}