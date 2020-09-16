<template>
  <div class="d-flex flex-column fill-height justify-center pa-3">
    <div class="flex-grow-0">
      <v-form @submit.prevent="submit">
        <v-row class="justify-center" no-gutters>
          <v-col cols="12" md="6" xl="4" align="center">
            <v-text-field v-model="searchText" solo rounded clearable>
              <template #prepend-inner v-if="defaultState">
                <v-icon>mdi-magnify</v-icon>
              </template>
              <template #append v-if="!defaultState">
                <v-btn icon type="submit">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>
            </v-text-field>
            <v-btn v-if="defaultState" rounded type="submit">Поиск пластинок</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div :class="['list-transition', { 'flex-grow-1': !defaultState }]">
      <vinyl-result-list v-bind="{ items, loading, noData, noResult }" ref="result" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { VinylResultList } from '@/components'
import { VinylService } from '@/services'
import { Vinyl } from '@/models'

Component.registerHooks(['beforeRouteEnter', 'beforeRouteUpdate'])

@Component<Home>({
  components: { VinylResultList },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.searchText = to.query.search as string
      vm.fetchDataAsync(to.query)
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.searchText = to.query.search as string
    this.fetchDataAsync(to.query)
    next()
  }
})
export default class Home extends Vue {
  searchText = ''
  items: Vinyl[] = []
  submit() {
    this.$router.push({ path: this.$route.path, query: { search: this.searchText } })
  }
  httpService = new VinylService()
  loading = false
  get noData() {
    return !(this.items.length && this.searchText)
  }
  get defaultState() {
    return !this.items.length && !this.loading && !this.noResult
  }
  noResult = false
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async fetchDataAsync(params: any) {
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

<style lang="scss" scoped>
.list-transition {
  transition: all 300ms ease-in-out;
}
</style>
