import Vue from 'vue'
import App from './App.vue'
import Store from './components/Store'
import './styles/style.css'

export const eventBus = new Vue();

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  data: Store,
  render: h => h(App),
}).$mount('#app')
