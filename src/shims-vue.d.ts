declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue-cli-plugin-vuetify-preset-rally/preset' {
  import { VuetifyPreset } from 'vuetify/types/services/presets'
  export const preset: VuetifyPreset
}

declare module 'vuetify/lib/framework' {
  import Vuetify from 'vuetify'
  export default Vuetify
}
