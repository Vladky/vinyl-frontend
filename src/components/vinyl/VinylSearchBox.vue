<template>
  <v-text-field placeholder="Поиск винила" v-model="model" solo rounded append-icon="mdi-magnify" />
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator'

@Component
export default class VinylSearchBox extends Vue {
  @PropSync('value', String) model!: string
}
</script>
