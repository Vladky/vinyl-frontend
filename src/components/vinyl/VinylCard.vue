<template>
  <v-card
    rounded
    :class="['vinyl-card', { 'elevation-5': isHovered }]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <v-img class="white--text align-end " :src="model.imageSrc">
      <v-card-title class="justify-end">
        <v-chip class="text--secondary" color="white">{{ model.price }} Р.</v-chip>
      </v-card-title>
    </v-img>
    <v-card-title>
      <v-tooltip top>
        <template #activator="{on}">
          <span v-on="on" class="text-crop text-crop--ellipsis">{{ model.album.title }}</span>
        </template>
        {{ model.album.title }}
      </v-tooltip>
    </v-card-title>
    <v-card-subtitle>
      <div class="text-crop text-crop--ellipsis">
        {{ model.album.artist.name }}
      </div>
    </v-card-subtitle>
    <v-card-actions class="justify-end">
      <v-btn color="primary" class="px-3" small dense outlined rounded :href="model.link" target="_blank">
        <v-icon small>
          mdi-cart
        </v-icon>
        <span class="pl-2 ">
          В магазин
        </span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, PropSync } from 'vue-property-decorator'

@Component({})
export default class VinylCard extends Vue {
  @PropSync('value', Object) model!: any
  isHovered = false
}
</script>

<style lang="scss">
.vinyl-card {
  /* cursor: pointer; */
}
.text-crop {
  white-space: nowrap;
  overflow: hidden;
  &--ellipsis {
    text-overflow: ellipsis;
  }
}
</style>
