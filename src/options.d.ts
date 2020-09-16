import VueRouter, { NavigationGuard } from 'vue-router'
declare module 'vue/types/options' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface ComponentOptions<V extends Vue> {
    router?: VueRouter
    beforeRouteEnter?: NavigationGuard<V>
    beforeRouteLeave?: NavigationGuard<V>
    beforeRouteUpdate?: NavigationGuard<V>
  }
}
