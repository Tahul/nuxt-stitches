import { useNuxtApp } from '#app'

export const useStitches = () => {
  const { $stitches } = useNuxtApp()

  return $stitches
}
