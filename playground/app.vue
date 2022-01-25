<template>
  <div>
    <span> Nuxt module playground! </span>

    <div v-for="index in 5" :key="index" v-bind="elementStyle()" v-html="`Hello`" />
  </div>
</template>

<script setup lang="ts">
import { useStitches } from '../src/runtime/composables/useStitches'

const { css } = useStitches()

const elementStyle = css({
  backgroundColor: '$blue',
  margin: 10
})
</script>
