<template>
  <div class="d-flex flex-column fill-height justify-center pa-3">
    <!-- <v-container fill-height class="ma-0"> -->
    <div class="flex-grow-0">
      <v-form @submit.prevent="submit">
        <v-row class="justify-center" no-gutters>
          <v-col cols="12" md="6" xl="4">
            <vinyl-search-box :value.sync="searchText" />
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div :class="{ 'flex-grow-1': !!items.length || loading || noResult }">
      <vinyl-result-list v-bind="{ items, loading, noData, noResult }" ref="result" />
    </div>
  </div>
  <!-- </v-container> -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { VinylSearchBox, VinylResultList } from '@/components'
import { VinylService } from '@/services'

Component.registerHooks(['beforeRouteEnter', 'beforeRouteUpdate'])

@Component({
  components: { VinylSearchBox, VinylResultList },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.searchText = to.query.search
      vm.fetchDataAsync(to.query)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.searchText = to.query.search
    this.fetchDataAsync(to.query)
    next()
  }
})
export default class Home extends Vue {
  searchText = ''
  items: any[] = []
  submit() {
    this.$router.push({ path: this.$route.path, query: { search: this.searchText } })
  }
  httpService = new VinylService()
  loading = false
  get noData() {
    return !(this.items.length && this.searchText)
  }
  noResult = false
  async fetchDataAsync(params) {
    if (params.search) {
      this.loading = true
      this.noResult = false
      this.items = await this.httpService.getAll(params)
      if (!this.items.length) {
        this.noResult = true
      }
      this.loading = false
    } else {
      this.items = []
    }
  }
}
</script>
