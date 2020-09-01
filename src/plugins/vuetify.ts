import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css'
import { preset } from 'vue-cli-plugin-vuetify-preset-rally/preset'

Vue.use(Vuetify)

export default new Vuetify({
  preset,
  theme: {
    themes: {
      light: {
        primary: '#4e89ae',
        secondary: '#43658b',
        error: '#ed6663',
        success: '#91d18b',
        warning: '#ffa372'
      }
    },
    dark: false
  },
  options: {
    customProperties: true
  },
  icons: {
    iconfont: 'mdi'
  }
})
