<template>
  <v-container fluid class="">
    <v-form @submit.prevent="submit">
      <v-row class="justify-center" no-gutters>
        <v-col cols="12" md="6" xl="4">
          <vinyl-search-box :value.sync="searchText" />
        </v-col>
      </v-row>
    </v-form>
    <div>
      <vinyl-result-list v-bind="{ items }" ref="result" />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { VinylSearchBox, VinylResultList } from '@/components'
import axios from 'axios'

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
  async fetchDataAsync(params) {
    ;(this.$refs.result as any).loading = true
    const { data } = await axios.get('http://localhost:8080/mdm/vinyl', { params })
    this.items = data
    console.log('Home -> fetchDataAsync -> this.items', this.items)
    ;(this.$refs.result as any).loading = false
  }
}
</script>
