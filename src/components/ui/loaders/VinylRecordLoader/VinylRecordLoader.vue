<template>
  <vue-lottie
    v-bind="{ options }"
    :height="128"
    :width="128"
    style="filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.5))"
  />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VueLottie from 'vue-lottie'
import animationData from './animation.json'

@Component({ components: { VueLottie } })
export default class VinylRecordLoader extends Vue {
  options = { animationData }
}
</script>
