import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  metaInfo: {
    title: 'Jerrid Domingo',
    titleTemplate: '%s | Jerrid Domingo',
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }
    ]
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
