<template>
  <v-container fill-height>
    <v-row v-if="!loading && !noResult">
      <v-col v-for="(item, index) in items" :key="index" cols="12" sm="6" md="4" lg="2" xl="1">
        <vinyl-card :value="item" />
      </v-col>
    </v-row>
    <div class="mx-auto" v-if="loading">
      <vinyl-record-loader />
      <h4 class="text--disabled"></h4>
    </div>
    <div class="mx-auto" v-if="noResult">
      <h4 class="text--disabled">Ничего не найдено. Попробуйте изменить запрос.</h4>
    </div>
    <!-- <div v-if="noData"></div> -->
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VinylCard from './VinylCard.vue'
import { VinylRecordLoader } from '../ui'

@Component({
  components: {
    VinylCard,
    VinylRecordLoader
  }
})
export default class VinylResultList extends Vue {
  @Prop(Array) items!: []
  @Prop(Boolean) loading!: boolean
  @Prop(Boolean) noData!: boolean
  @Prop(Boolean) noResult!: boolean
}
</script>
