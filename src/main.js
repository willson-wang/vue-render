import Vue from 'vue'
import App from './App.vue'

import GlobalRender from './components/globalRender'
import GlobalTemplate from './components/globalTemplate'

Vue.config.productionTip = false

Vue.component(GlobalRender.name, GlobalRender)
Vue.component(GlobalTemplate.name, GlobalTemplate)

new Vue({
  render: h => h(App),
}).$mount('#app')
