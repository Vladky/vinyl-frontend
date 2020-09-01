<template>
  <div>
    <v-row v-if="!loading">
      <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6" md="4" lg="2" xl="1">
        <vinyl-card :value="item" />
      </v-col>
    </v-row>
    <div v-else>
      Ищем пластинки...
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VinylCard from './VinylCard.vue'

@Component({
  components: {
    VinylCard
  }
})
export default class VinylResultList extends Vue {
  @Prop(Array) items!: []
  loading = false
}
</script>
